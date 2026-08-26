
# Travel Unbounded – Enquiry Form Web App

A full‑stack web application built with **Next.js 13**, **MongoDB Atlas**, and **Vercel**.  
Users can submit travel enquiries via a contact form, and the data is stored securely in MongoDB.


## 🚀 Features
- **Frontend**: Next.js 13 (React framework)
- **Backend API**: Next.js Route Handlers (`app/api/enquiry/route.js`)
- **Database**: MongoDB Atlas (cloud database)
- **Deployment**: Vercel (serverless hosting)
- **Form Handling**: POST requests to `/api/enquiry`

---

## 📂 Project Structure
```
project-root/
│
├── app/
│   ├── contact/          # Contact form page
│   └── api/
│       └── enquiry/
│           └── route.js  # API route for handling POST requests
│
├── lib/
│   └── mongodb.js        # MongoDB connection helper
│
├── models/
│   └── Enquiry.js        # Mongoose schema for enquiries
│
├── package.json
└── README.md
```

---

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory and add:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.nc3fppe.mongodb.net/travel-unbounded?retryWrites=true&w=majority
```

⚠️ **Important Notes**:
- Replace `<username>` and `<password>` with your MongoDB Atlas user credentials.
- If your password contains special characters (`@`, `#`, `%`), URL‑encode them.
- Ensure your Atlas **Network Access** allows `0.0.0.0/0` so Vercel can connect.

### 4. Run Locally
```bash
npm run dev
```
Visit: `http://localhost:3000`

---

## 🌐 Deployment on Vercel
1. Push your code to GitHub.
2. Connect your repo to Vercel.
3. In **Vercel → Project → Settings → Environment Variables**, add:
   - Key: `MONGODB_URI`
   - Value: your Atlas connection string
4. Redeploy your project.
5. Test the form at `/contact`.

---

## 📡 API Endpoint
### POST `/api/enquiry`
- **Request Body** (JSON):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I want to book a trip to Ladakh."
}
```

- **Response**:
```json
{
  "success": true
}
```

---

## 🧩 Troubleshooting
- **MongoParseError: Invalid scheme** → Check that URI starts with `mongodb+srv://`.
- **Bad auth** → Reset Atlas user password and update URI.
- **ServerSelectionError (IP not whitelisted)** → Add `0.0.0.0/0` in Atlas Network Access.
- **500 error on `/api/enquiry`** → Check Vercel logs for details.

---

## 📖 Tech Stack
- Next.js
- MongoDB Atlas
- Vercel
- Mongoose

---

