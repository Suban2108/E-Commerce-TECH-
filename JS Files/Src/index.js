// index.js
const express = require("express");
const session = require("express-session");
const path = require("path");
const { SignupModel, ProductModel } = require("./mongodb"); // Updated import statement

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'Suban2004',
    resave: false,
    saveUninitialized: true
}));

let isLoggedIn = false; // Variable to track user login status

// Middleware to check user authentication
const checkAuth = (req, res, next) => {
    if (isLoggedIn) {
        next(); // If user is logged in, proceed to the next middleware/route
    } else {
        res.redirect('/loginpage'); // If user is not logged in, redirect to login page
    }
}

app.get('/logout', (req, res) => {
    // Clear the user session
    isLoggedIn = false; // Update isLoggedIn to false upon successful logout
    res.redirect('/'); // Redirect to the index page after successful logout
});

app.get('/index_after_signedin', checkAuth, async (req, res) => {
    const user = req.user; // Assuming you have set req.user in your authentication middleware
    res.render('index_after_signedin', { user });
});

// Set up view engine and static files
app.set('view engine', 'hbs');
app.set('views', [
    path.join(__dirname, '../templates'),
    path.join(__dirname, '../templates/Computer')
]);

app.use(express.static(path.join(__dirname, '../Public')));

// Routes
// Route to fetch product details by name
// app.get('/detail/:ProductName', async (req, res) => {
//     try {
//         const productName = req.params.ProductName; 

//       
//         const product = await ProductModel.findOne({ name: productName }); // Query using exact match
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }

//         // Render the details page with the fetched product details
//         res.render(`/detail`, { product });

//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });


app.get('/Computer/detail_ASUSAi0A3Series', async (req, res) => {
    const productName = "ASUS AiO A3 Series";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`Computer/detail_ASUSAi0A3Series`, { product });
})

app.get('/Computer/detail_hpl', async (req, res) => {
    const productName = "HP Intel Core i5-1235U";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`Computer/detail_hpl`, { product });
})

app.get('/Computer/detail_lenovo', async (req, res) => {
    const productName = "Lenovo IdeaCentre AIO 3 Intel i5 12450H";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`Computer/detail_lenovo`, { product });
})

app.get('/Computer/detail_acerv', async (req, res) => {
    const productName = "Acer Veriton E220 Mini PC Intel Celeron Quad N5105";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`Computer/detail_acerv`, { product });
})

app.get('/Computer/detail_hp1', async (req, res) => {
    const productName = "HP All-in-One PC Ryzen 5 7520U";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`Computer/detail_hp1`, { product });
})

app.get('/Computer/detail_dell', async (req, res) => {
    const productName = "Dell Intel Core i5-1335U";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`Computer/detail_dell`, { product });
})

app.get('/Computer/detail_iMac', async (req, res) => {
    const productName = "Apple 2023 iMac";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`Computer/detail_iMac`, { product });
})


app.get('/laptop/detail_Macbook', async (req, res) => {
    const productName = "Macbook";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`laptop/detail_Macbook`, { product });
})

app.get('/laptop/detail_acer', async (req, res) => {
    const productName = "Acer Chromebook Spin";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`laptop/detail_acer`, { product });
})

app.get('/laptop/detail_dell1', async (req, res) => {
    const productName = "DELL XPS 15 Laptop";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`laptop/detail_dell1`, { product });
})

app.get('/laptop/detail_msi', async (req, res) => {
    const productName = "MSI GS76 Stealth";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`laptop/detail_msi`, { product });
})

app.get('/laptop/detail_lenovo_V', async (req, res) => {
    const productName = "Lenovo V14 Intel Core i3 11th Gen";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`laptop/detail_lenovo_V`, { product });
})

app.get('/laptop/detail_hp', async (req, res) => {
    const productName = "HP EliteBook";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`laptop/detail_hp`, { product });
})

app.get('/laptop/detail_infinix', async (req, res) => {
    const productName = "Infinix ZERO BOOK";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`laptop/detail_infinix`, { product });
})

app.get('/smartphones/detail_redmi', async (req, res) => {
    const productName = "Redmi Note 13 Pro+";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`smartphones/detail_redmi`, { product });
})

app.get('/smartphones/detail_oneplus', async (req, res) => {
    const productName = "OnePlus 12";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`smartphones/detail_oneplus`, { product });
})

app.get('/smartphones/detail_GP7', async (req, res) => {
    const productName = "Google Pixel 7 Pro";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`smartphones/detail_GP7`, { product });
})

app.get('/smartphones/detail_moto', async (req, res) => {
    const productName = "Motorola Razr 40 Ultra";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`smartphones/detail_moto`, { product });
})

app.get('/smartphones/detail_iphone', async (req, res) => {
    const productName = "Apple iPhone 15";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`smartphones/detail_iphone`, { product });
})

app.get('/smartphones/detail_samsung', async (req, res) => {
    const productName = "Samsung Galaxy S24+";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`smartphones/detail_samsung`, { product });
})

app.get('/smartphones/detail_oppo', async (req, res) => {
    const productName = "Oppo’s Reno";

    const product = await ProductModel.findOne({ name: productName });

    res.render(`smartphones/detail_oppo`, { product });
})
app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/buynow', (req, res) => {
    res.render('buynow');
});

app.get('/products-computers', (req, res) => {
    res.render('products-computers');
});

app.get('/products-laptop', (req, res) => {
    res.render('products-laptop');
});

app.get('/products-smartphone', (req, res) => {
    res.render('products-smartphone');
});

app.get('/loginpage', (req, res) => {
    res.render('loginpage');
});

app.get('/signuppage', (req, res) => {
    res.render('signuppage');
});

app.get('/index_after_signedin', (req, res) => {
    res.render('index_after_signedin');

})

app.get('/details', (req, res) => {
    res.render('details');

})

// Route handler for signup form submission
app.post('/signuppage', async (req, res) => {
    // Handle form submission here
    const data = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }

    try {
        // Check if the user already exists in the database
        const existingUser = await SignupModel.findOne({ name: req.body.name });
        if (existingUser) {
            // If user already exists, send an alert message and redirect to login page
            return res.send('<script>alert("You are already registered. Please login."); window.location.href = "/loginpage";</script>');
        }

        // Create a new user in the database
        const newUser = await SignupModel.create(data);
        res.send('<script>alert("You are now registered .Please login now with your Credentials."); window.location.href = "/loginpage";</script>');
    } catch (error) {
        console.error(error);
        res.send("Error creating user");
    }
});

// Route handler for login form submission
app.post('/loginpage', async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await SignupModel.findOne({ name, password });
        if (!user) {
            return res.send("Invalid username or password");
        }

        isLoggedIn = true; // Set isLoggedIn to true upon successful login
        res.redirect('/index_after_signedin');
    } catch (error) {
        console.error(error);
        res.send("Error logging in");
    }
});

app.get('/cart', checkAuth, async (req, res) => {
    // const productName = "Samsung Galaxy S24+";

    // const product = await ProductModel.findOne({ name: productName }); // Query using exact match
    res.render('index_after_signedin');
});

app.listen(port, () => {
    console.log('port connected');
});
