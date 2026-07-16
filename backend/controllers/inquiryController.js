import Inquiry from "../models/Inquiry.js";

export const createInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      data: inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getAllInquiries = async (req, res) => {
    try {
      const inquiries = await Inquiry.find().sort({
        createdAt: -1,
      });
  
      res.status(200).json({
        success: true,
        count: inquiries.length,
        data: inquiries,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  export const deleteInquiry = async (req, res) => {
    try {
      const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
  
      if (!inquiry) {
        return res.status(404).json({
          success: false,
          message: "Inquiry not found",
        });
      }
  
      res.json({
        success: true,
        message: "Inquiry deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };