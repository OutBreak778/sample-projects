import SessionModel from "../models/session.js";

export async function createSession(req, res) {
  const { title, tags, json_file_url, status } = req.body;
  const userId = req.user._id;

  if (!userId) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized Access",
    });
  }
  try {
    const session = await SessionModel.create({
      userId,
      title,
      tags,
      json_file_url,
      status,
    });
    return res.status(200).json({
      success: true,
      session,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

export async function getAllSession(req, res) {
  const userId = req.user._id;

  if (!userId) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized Access",
    });
  }

  try {
    const data = await SessionModel.find({ userId });

    return res.status(200).json({
      success: true,
      total: data.length,
      data,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

export async function getSingleSession(req, res) {
  const sessionId = req.params.id;
  const userId = req.user._id;

  try {
    const session = await SessionModel.findById(sessionId);

    if (!session) {
      return res
        .status(404)
        .json({ success: false, message: "Session not found" });
    }

    // Access Control
    const isOwner = session.userId._id.toString() === userId.toString();
    if (session.status !== "published" && !isOwner) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Session fetched successfully",
      session,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function updateSession(req, res) {
  const updatedData = req.body;
  const sessionId = req.params.id;
  const userId = req.user._id;

  try {
    const session = await SessionModel.findById(sessionId).select(
      "title tags json_file_url status userId"
    );

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found",
      });
    }

    const isValid = session.userId._id.toString() === userId.toString();
    if (!isValid) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized Access",
      });
    }

    if (updatedData.title !== undefined) session.title = updatedData.title;
    if (updatedData.tags !== undefined) session.tags = updatedData.tags;
    if (updatedData.json_file_url !== undefined)
      session.json_file_url = updatedData.json_file_url;
    if (updatedData.status !== undefined) session.status = updatedData.status;

    await session.save();

    return res.status(200).json({
      success: true,
      message: "Session updated successfully",
      session,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteSession(req, res) {
  const sessionId = req.params.id;
  try {
    const session = await SessionModel.findById(sessionId);

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found",
      });
    }

    await session.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Session deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function publishSession(req, res) {
  const sessionId = req.body.sessionId;  
  const userId = req.user._id;
  const { title, tags, json_file_url } = req.body;

  try {
    let session;

    if (sessionId) {
      session = await SessionModel.findById(sessionId);

      if (!session) {
        return res.status(404).json({
          success: false,
          message: "Session not found",
        });
      }

      if (session.userId.toString() !== userId.toString()) {
        return res.status(403).json({
          success: false,
          message: "Unauthorized Access",
        });
      }

      session.title = title || session.title;
      session.tags = tags || session.tags;
      session.json_file_url = json_file_url || session.json_file_url;
      session.status = "published";

      await session.save();
    } 
    // Case 2: If no sessionId, create a new one
    else {
      if (!title || !tags || !json_file_url) {
        return res.status(400).json({
          success: false,
          message: "Title, tags, and JSON file URL are required to publish a new session.",
        });
      }

      session = await SessionModel.create({
        userId,
        title,
        tags,
        json_file_url,
        status: "published",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Session published successfully",
      session,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
