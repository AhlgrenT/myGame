# ER-to-SQL
Application for converting ER diagrams to SQL code


# Project structure:
project-root/
│
├── client/                    # Frontend (React + TypeScript)
│   ├── public/                # Public static files (index.html, images, icons)
│   ├── src/                   # Main source code for the frontend
│   │   ├── components/        # Reusable UI components (e.g., EntityBox, AttributeEditor)
│   │   ├── pages/             # Page components (e.g., HomePage, DiagramEditor)
│   │   ├── hooks/             # Custom React hooks for managing state and logic
│   │   ├── services/          # API and utility functions for communicating with backend
│   │   ├── context/           # Context providers for global state (e.g., diagram state)
│   │   ├── utils/             # Helper functions (e.g., validation, SQL generation utils)
│   │   ├── wasm/              # WebAssembly (compiled C++) modules, if applicable
│   │   ├── styles/            # Global styles (CSS or SCSS files)
│   │   ├── App.tsx            # Root app component
│   │   └── index.tsx          # Main entry point for React app
│   └── tsconfig.json          # TypeScript configuration for frontend
│
├── server/                    # Backend (Node.js + Express)
│   ├── src/                   # Source code for backend
│   │   ├── controllers/       # Route controllers for handling requests
│   │   ├── models/            # Data models (optional, e.g., for saving/loading diagrams)
│   │   ├── routes/            # API routes (e.g., /generate-sql, /save-diagram)
│   │   ├── services/          # Business logic, e.g., SQL generation logic
│   │   ├── utils/             # Utility functions (e.g., validation, formatting)
│   │   ├── addons/            # Node.js Addons (compiled C++ modules), if applicable
│   │   └── index.ts           # Main entry point for server app
│   ├── package.json           # Node.js dependencies for backend
│   └── tsconfig.json          # TypeScript configuration for backend
│
├── cpp/                       # C++ source files
│   ├── sql_generator.cpp      # SQL generation logic in C++
│   ├── layout_optimizer.cpp   # Diagram layout algorithms in C++
│   ├── CMakeLists.txt         # Build instructions for CMake
│   ├── build/                 # Build output directory for C++ (e.g., WASM or Node Addons)
│   └── include/               # Header files for C++ code
│
├── scripts/                   # Project automation scripts
│   ├── build_wasm.sh          # Script for compiling C++ code to WebAssembly
│   ├── build_addon.sh         # Script for compiling C++ Node Addons
│   └── start_dev.sh           # Development start script for frontend + backend
│
├── package.json               # Project-level dependencies and scripts
├── README.md                  # Project documentation
└── .gitignore                 # Git ignore file