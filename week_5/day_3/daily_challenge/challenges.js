productSchema.index({ category: 1, price: 1 })

const getProducts = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = 24
  
    const products = await Product.find()
      .select("title price image")
      .skip((page - 1) * limit)
      .limit(limit)
      .lean()
  
    res.json(products)
  }


  