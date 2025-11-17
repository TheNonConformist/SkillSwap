# SkillSwap - Campus Peer Workshop Platform

![SkillSwap Banner](https://via.placeholder.com/800x200/46a35d/ffffff?text=SkillSwap+-+Campus+Peer+Workshops)

SkillSwap is a modern web application that enables students to create, discover, and participate in peer-led workshops on campus. Built with React, TypeScript, and MongoDB, it provides a platform for knowledge sharing and skill development among students.

## 🚀 Features

- **🎯 Workshop Discovery**: Browse and search for workshops across various skills and interests
- **👥 Peer-to-Peer Learning**: Students teach and learn from each other
- **📱 Modern UI**: Clean, responsive design with an intuitive user interface
- **🔐 Secure Authentication**: User registration and login with password hashing
- **📊 Real-time Data**: Live updates on workshop availability and participation
- **🎨 Custom Styling**: Beautiful green and white color scheme optimized for learning environments

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **CSS3** - Custom styling with CSS variables

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Database
- **MongoDB Compass** - Database management and visualization
- **Collections**: `users`, `workshops`

## 📁 Project Structure

```
skill-up/
├── src/
│   ├── comps/                 # React components
│   │   ├── Home.tsx          # Landing page with workshops
│   │   ├── Login.tsx         # User authentication
│   │   ├── Register.tsx      # User registration
│   │   ├── Dashboard.tsx     # User dashboard
│   │   ├── Help.tsx          # Help and documentation
│   │   └── About.tsx         # About page
│   ├── App.tsx               # Main application component
│   ├── App.css               # Application-specific styles
│   ├── index.css             # Global styles and CSS variables
│   └── main.tsx              # Application entry point
├── backend/
│   ├── server.js             # Express server with API endpoints
│   ├── package.json          # Backend dependencies
│   └── package-lock.json     # Dependency lock file
├── public/                   # Static assets
└── package.json             # Frontend dependencies
```

## 🎨 Design System

### Color Palette
- **Primary Green**: RGB(70, 163, 94) - Growth, learning, collaboration
- **Pure White**: Clean, modern background
- **Accent Colors**: Blue, orange, and purple for visual variety

### Typography
- **Headings**: Gradient text with primary green
- **Body**: Clean, readable fonts with proper hierarchy
- **Interactive Elements**: Hover effects and smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheNonConformist/SkillSwap.git
   cd SkillSwap
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up MongoDB**
   - Install MongoDB locally or use MongoDB Atlas
   - Ensure MongoDB is running on `mongodb://localhost:27017`

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   node server.js
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend development server** (in a new terminal)
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 📡 API Endpoints

### Authentication
- `POST /api/register` - Create new user account
- `POST /api/login` - User authentication

### Workshops
- `GET /api/workshops` - Get all workshops
- `POST /api/workshops` - Create new workshop
- `POST /api/workshops/:id/join` - Join a workshop

### User Management
- `GET /api/user/:username` - Get user profile
- `GET /api/admin/users` - View all users (terminal display)
- `GET /api/admin/workshops` - View all workshops (terminal display)
- `GET /api/admin/stats` - Database statistics

## 💾 Database Schema

### Users Collection
```javascript
{
  username: String (required, unique),
  password: String (required, hashed),
  email: String (required),
  skills: [String],
  interests: [String],
  createdAt: Date
}
```

### Workshops Collection
```javascript
{
  title: String (required),
  description: String (required),
  host: String (required),
  date: Date (required),
  location: String (required),
  maxParticipants: Number (required),
  currentParticipants: Number,
  participants: [String],
  tags: [String],
  createdAt: Date
}
```

## 🎯 Usage Examples

### Creating a Workshop
1. Register/Login to your account
2. Navigate to the dashboard
3. Fill out workshop details (title, description, date, location, max participants)
4. Add relevant tags for discoverability

### Joining a Workshop
1. Browse available workshops on the home page
2. Click "View details" on any workshop
3. Click "Join Workshop" to reserve your spot
4. Receive confirmation and workshop details

## 🔧 Development

### Available Scripts

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

**Backend:**
- `node server.js` - Start the Express server

### Environment Variables
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/skillswap
PORT=5000
JWT_SECRET=your_jwt_secret_here
```

## 📊 Data Viewing in Terminal

Access real-time data display through these endpoints:

```bash
# View all users
curl http://localhost:5000/api/admin/users

# View all workshops
curl http://localhost:5000/api/admin/workshops

# View database statistics
curl http://localhost:5000/api/admin/stats
```

## 🗄️ MongoDB Compass Integration

Connect MongoDB Compass using:
```
mongodb://localhost:27017/skillswap
```

View and manage your database collections directly through the Compass interface.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Mohammed Rizwan** - Project Developer

## 🙏 Acknowledgments

- React and TypeScript communities
- MongoDB for robust database solutions
- Vite for excellent developer experience
- All contributors and testers

---

**SkillSwap** - Empowering students through peer-to-peer learning and skill sharing. 🎓✨