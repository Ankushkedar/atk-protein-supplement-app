# PRIDE SUPPLEMENTS - Project Structure

```
pride-supplements/
│
├── client/                          # React Frontend
│   ├── public/
│   │   ├── index.html              # Main HTML file
│   │   ├── manifest.json           # PWA manifest
│   │   └── favicon.ico             # Website icon
│   │
│   ├── src/
│   │   ├── components/             # Reusable components
│   │   │   ├── Navbar.js          # Navigation bar
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.js          # Footer component
│   │   │   └── Footer.css
│   │   │
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.js            # Landing page
│   │   │   ├── Home.css
│   │   │   ├── Products.js        # Product listing
│   │   │   ├── Products.css
│   │   │   ├── ProductDetail.js   # Single product view
│   │   │   ├── ProductDetail.css
│   │   │   ├── Cart.js            # Shopping cart
│   │   │   ├── Cart.css
│   │   │   ├── Checkout.js        # Checkout page
│   │   │   ├── Checkout.css
│   │   │   ├── Login.js           # User login
│   │   │   ├── Register.js        # User registration
│   │   │   ├── Auth.css           # Auth pages styling
│   │   │   ├── Profile.js         # User profile
│   │   │   ├── Profile.css
│   │   │   ├── Contact.js         # Contact form
│   │   │   ├── Contact.css
│   │   │   ├── About.js           # About page
│   │   │   └── About.css
│   │   │
│   │   ├── App.js                 # Main app component
│   │   ├── index.js               # React entry point
│   │   └── index.css              # Global styles
│   │
│   ├── package.json               # Frontend dependencies
│   └── .gitignore
│
├── server/                         # Node.js Backend
│   ├── models/                    # MongoDB models
│   │   ├── User.js               # User schema
│   │   ├── Product.js            # Product schema
│   │   └── Order.js              # Order schema
│   │
│   ├── routes/                    # API routes
│   │   ├── auth.js               # Authentication routes
│   │   ├── products.js           # Product routes
│   │   ├── orders.js             # Order routes
│   │   └── contact.js            # Contact form route
│   │
│   ├── middleware/                # Custom middleware
│   │   └── auth.js               # JWT authentication
│   │
│   ├── index.js                  # Server entry point
│   ├── package.json              # Backend dependencies
│   └── .env.example              # Environment variables template
│
├── package.json                   # Root package.json
├── .gitignore                    # Git ignore rules
├── README.md                     # Project documentation
├── SETUP_GUIDE.md               # Detailed setup instructions
└── PROJECT_STRUCTURE.md         # This file

```

## 📁 Key Directories Explained

### Frontend (`client/`)
- **components/**: Reusable UI components (Navbar, Footer)
- **pages/**: Full page components with routing
- **public/**: Static assets and HTML template

### Backend (`server/`)
- **models/**: Database schemas (User, Product, Order)
- **routes/**: API endpoints for different features
- **middleware/**: Authentication and validation logic

## 🎨 Design System

### Colors
- Primary: #ff6b35 (Orange)
- Secondary: #004e89 (Blue)
- Dark: #1a1a2e (Navy)
- Light: #f8f9fa (Off-white)

### Typography
- Font Family: Poppins
- Headings: 700-800 weight
- Body: 400-500 weight

## 🔌 API Endpoints

### Authentication
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product
- POST `/api/products` - Create product (Admin)

### Orders
- POST `/api/orders` - Create order
- GET `/api/orders/my-orders` - Get user orders

### Contact
- POST `/api/contact` - Submit contact form

## 🚀 Available Scripts

### Root Directory
- `npm run install-all` - Install all dependencies
- `npm run dev` - Run both frontend and backend
- `npm run client` - Run frontend only
- `npm run server` - Run backend only

### Client Directory
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Server Directory
- `npm start` - Start production server
- `npm run dev` - Start with nodemon (auto-reload)

## 📦 Dependencies

### Frontend
- react, react-dom, react-router-dom
- axios (API calls)
- react-icons (Icons)
- react-toastify (Notifications)

### Backend
- express (Web framework)
- mongoose (MongoDB ODM)
- bcryptjs (Password hashing)
- jsonwebtoken (JWT auth)
- cors (Cross-origin requests)
- dotenv (Environment variables)
- express-validator (Input validation)

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation
- CORS configuration
- Environment variable protection

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Features by Page

### Home
- Hero section with CTA
- Features showcase
- Featured products
- Testimonials
- Call-to-action section

### Products
- Category filters
- Search functionality
- Product grid
- Add to cart

### Cart
- Quantity management
- Remove items
- Order summary
- Checkout button

### Checkout
- Shipping form
- Payment method selection
- Order summary
- Place order

### Profile
- User information
- Order history
- Order status tracking

## 🌟 Best Practices Implemented

- Component-based architecture
- Responsive design
- Clean code structure
- RESTful API design
- Secure authentication
- Error handling
- Loading states
- User feedback (toasts)
- Mobile-first approach

---

Built with ❤️ for PRIDE SUPPLEMENTS
