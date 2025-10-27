<<<<<<< HEAD
# chatRoom
=======
# 💬 ChatHub

A real-time chatroom web app built with **Angular 15**, **TypeScript**, **SCSS**, and a **.NET (SignalR)** backend.
Users can join chatrooms, send and receive messages live, and see connected participants — all without any database or REST API.

---

## 🚀 Features

* ⚡ **Real-time messaging** using SignalR WebSockets
* 🧑‍🤝‍🧑 **Dynamic chatrooms** (join / leave in real time)
* 👥 **Live user list updates** per room
* 💬 **Instant broadcasting** across clients
* 🧩 **Angular 15 frontend** built with modular TypeScript
* 🎨 Styled with **SCSS** for a clean, responsive layout
* 🧹 No database — purely in-memory communication layer

---

## 🧰 Tech Stack

| Layer             | Technology                   |
| :---------------- | :--------------------------- |
| **Frontend**      | Angular 15, TypeScript, SCSS |
| **Backend**       | .NET 6 (SignalR, C#)         |
| **Communication** | WebSocket protocol (SignalR) |

---

## 📁 Folder Structure

```
ChatHub/
│
├── ChatHubBack/               # .NET backend
│   ├── ChatHub.cs             # SignalR Hub logic
│   ├── Program.cs             # Web app & CORS setup
│   ├── appsettings.json
│   ├── appsettings.Development.json
│   ├── ChatHubBack.csproj
│   └── Properties/
│
└── ChatHubFront/              # Angular frontend
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   └── services/
    │   │       └── auth/
    │   │           └── auth.service.ts
    │   │       └── chat/
    │   │           └── chat.service.ts
    │   │       └── room/
    │   │           └── room.service.ts
    │   ├── assets/
    │   ├── styles.scss
    │   └── environments/
    ├── angular.json
    ├── package.json
    └── ...
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/chathub.git
cd chathub
```

---

### 2️⃣ Start the backend (.NET SignalR)

```bash
cd ChatHubBack
dotnet run
```

➡ Runs at: **[http://localhost:5167](http://localhost:5167)**
➡ Test in browser: [http://localhost:5167](http://localhost:5167)
Should return:

```
Backend is running
```

---

### 3️⃣ Start the frontend (Angular)

```bash
cd ../ChatHubFront
npm install
npm start
```

➡ Opens at: **[http://localhost:4200](http://localhost:4200)**

---

## 🧠 How It Works

1. The **Angular frontend** connects to the backend via `SignalR` at `http://localhost:5167/chathub`.
2. When a user sends a message, it’s broadcast in real time to everyone in that chatroom.
3. User lists update dynamically as participants join or leave.
4. Everything runs in memory — no database required.

---

## 💬 Demo Flow

1. Open two browser tabs
2. Join the same chatroom with different usernames
3. Type messages — they appear instantly in both tabs 🎉
4. Leave or close a tab — user list updates live

---

## 🔧 Future Enhancements

* 🧠 Add message persistence (database)
* 🔐 Add authentication (JWT)
* 🪄 Typing indicators & message timestamps
* 🧱 Room creation / management via UI
* 📱 Improved responsive design
>>>>>>> 3cf113c8e2899368fa45123126d4429a7051d710
