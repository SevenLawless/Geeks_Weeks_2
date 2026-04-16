const menuModel = require('../models/menuModel');

const getMenu = async (req, res) => {
  try {
    const items = await menuModel.getAllItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getMenuItem = async (req, res) => {
  try {
    const item = await menuModel.getItemByName(req.params.name);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addMenuItem = async (req, res) => {
  try {
    const { name, price } = req.body;
    const item = await menuModel.createItem(name, price);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateMenuItem = async (req, res) => {
  try {
    const { name, price } = req.body;
    const item = await menuModel.updateItem(req.params.id, name, price);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteMenuItem = async (req, res) => {
  try {
    const item = await menuModel.deleteItem(req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getMenu,
  getMenuItem,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem
};