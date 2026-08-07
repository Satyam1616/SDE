# SDE-1 Preparation Roadmap — Part 3: System Design, Projects & DevOps

---

## 11. System Design Roadmap

### Week 16-22 | **MEDIUM-HIGH PRIORITY for SDE-1**

> At SDE-1 level, you won't design Twitter from scratch. But you MUST understand building blocks and think about scale.

### 11.1 Building Blocks (Learn First)

| Building Block | What It Does | When to Use |
|---------------|-------------|-------------|
| **Client-Server** | Basic request/response architecture | Foundation of everything |
| **Load Balancer** | Distributes traffic across servers | When single server can't handle load |
| **CDN** | Serves static content from edge locations | Images, videos, CSS, JS |
| **Cache** | Stores frequently accessed data in memory | Reduce DB load, speed up reads |
| **Database** | Persistent data storage | Every system |
| **Message Queue** | Async communication between services | Decouple services, handle spikes |
| **Object Storage** | Store files (S3) | Images, videos, documents |
| **Reverse Proxy** | Sits in front of servers (Nginx) | SSL termination, static files, routing |
| **API Gateway** | Single entry point for microservices | Route requests to correct service |

### 11.2 Key Concepts

| Concept | What to Know |
|---------|-------------|
| **Horizontal vs Vertical Scaling** | Add more machines vs bigger machine. Prefer horizontal. |
| **CAP Theorem** | Consistency, Availability, Partition Tolerance — pick 2 |
| **Database Replication** | Master-slave, master-master. Read replicas. |
| **Database Sharding** | Split data across databases by key. Challenges. |
| **Caching Strategies** | Cache-aside, write-through, write-behind. TTL. Invalidation. |
| **Rate Limiting** | Token bucket, sliding window. Protect APIs. |
| **Consistent Hashing** | Distribute load evenly. Hash ring concept. |
| **Microservices vs Monolith** | Trade-offs. Start monolith, split when needed. |
| **Eventual Consistency** | Data will be consistent eventually. Trade-off for availability. |

### 11.3 System Design Template (Use for Every Problem)

```
1. REQUIREMENTS (5 min)
   ├── Functional: What must the system do?
   └── Non-functional: Scale, latency, availability

2. ESTIMATION (3 min)
   ├── Users: DAU, concurrent users
   ├── Storage: per item × count × retention
   └── Bandwidth: requests/second

3. API DESIGN (5 min)
   ├── List key endpoints
   ├── Request/response format
   └── Authentication

4. DATABASE SCHEMA (5 min)
   ├── Core entities and relationships
   ├── SQL vs NoSQL decision
   └── Indexing strategy

5. HIGH-LEVEL ARCHITECTURE (10 min)
   ├── Draw components: client, LB, servers, DB, cache
   ├── Show data flow
   └── Identify main components

6. DEEP DIVE (10 min)
   ├── Pick 1-2 complex components
   ├── Discuss trade-offs
   └── Scaling strategy

7. BOTTLENECKS & TRADE-OFFS (5 min)
   ├── Single points of failure
   ├── Scaling challenges
   └── What you'd improve with more time
```

### 11.4 System Design Problems

#### Problem 1: URL Shortener (Easy)

**Functional:** Shorten URL, redirect to original, analytics (click count)
**Non-functional:** Low latency redirect, high availability, 100M URLs

**Key Design Decisions:**
- **ID generation:** Base62 encoding of auto-increment ID or hash
- **Database:** Key-value store (Redis) + SQL for persistence
- **Cache:** Cache popular URLs in Redis (80/20 rule)
- **Scale:** Read-heavy → read replicas, cache layer

**Schema:**
```
urls: { id, short_code, original_url, created_at, click_count, user_id }
```

**APIs:**
- `POST /api/shorten` → `{ originalUrl }` → `{ shortUrl }`
- `GET /:shortCode` → 301 redirect

---

#### Problem 2: Chat Application (Medium)

**Functional:** 1:1 chat, group chat, online status, message history
**Non-functional:** Real-time delivery, message ordering, offline support

**Key Decisions:**
- **Protocol:** WebSockets for real-time, HTTP for history
- **Message flow:** Client → WebSocket Server → Message Queue → Recipient
- **Storage:** Messages in DB (partition by conversation_id)
- **Online status:** Heartbeat mechanism, Redis for presence
- **Group chat:** Fan-out on write vs fan-out on read

---

#### Problem 3: Social Media Feed (Medium)

**Functional:** Post content, follow users, news feed, like/comment
**Non-functional:** Feed generation < 500ms, handle millions of users

**Key Decisions:**
- **Feed generation:** Fan-out on write (precompute feeds) vs fan-out on read (compute on request)
- **Celebrity problem:** Hybrid approach — fan-out on write for regular users, fan-out on read for celebrities
- **Caching:** Cache user's feed in Redis, invalidate on new post
- **Database:** Posts table, followers table (graph), feed cache

---

#### Problem 4: Food Delivery (Medium-Hard)

**Functional:** Browse restaurants, order food, track delivery, payments
**Non-functional:** Real-time tracking, handle peak hours, geo-proximity

**Key Decisions:**
- **Geospatial:** PostGIS or MongoDB geospatial queries for nearby restaurants
- **Order flow:** Placed → Accepted → Preparing → Picked Up → Delivered (state machine)
- **Real-time tracking:** WebSocket for driver location updates
- **Queue:** Order placement → processing queue → notification to restaurant

---

#### Problem 5: Notification System (Medium)

**Functional:** Push, email, SMS, in-app notifications. Priority levels.
**Non-functional:** Delivery guarantee, deduplication, rate limiting

**Key Decisions:**
- **Message queue:** Each notification type has its own queue (email queue, push queue)
- **Priority:** Priority queue for urgent notifications
- **Template system:** Store templates, inject variables
- **Deduplication:** Check before sending (idempotency key)

---

#### Problems 6-8 (Practice on your own using the template):
- **Ride-sharing** — Focus on matching algorithm, geo, real-time
- **File Storage** — Focus on chunking, deduplication, metadata DB
- **Video Streaming** — Focus on CDN, transcoding pipeline, adaptive bitrate

---

## 12. Project Roadmap

> **Quality > Quantity. 3 strong projects you can explain deeply beat 10 shallow ones.**

### Project 1: Full-Stack Task/Project Management App

**Why:** Demonstrates complete full-stack capability. Covers auth, CRUD, real-time updates, complex UI state.

#### Feature List

| Feature | Priority | Demonstrates |
|---------|----------|-------------|
| User registration & login (JWT) | HIGH | Auth implementation |
| Create/edit/delete projects | HIGH | CRUD, API design |
| Task boards (Kanban-style) | HIGH | Complex UI state, drag-and-drop |
| Task assignment to users | HIGH | Relationships, authorization |
| Real-time updates (WebSocket) | HIGH | Real-time architecture |
| Comments on tasks | MEDIUM | Nested data, pagination |
| File attachments | MEDIUM | File upload handling |
| Search & filtering | MEDIUM | Query optimization |
| Activity log | MEDIUM | Event tracking |
| Email notifications | LOW | Background jobs, queues |
| Dashboard with analytics | MEDIUM | Aggregation, data visualization |
| Role-based access (Admin/Member/Viewer) | HIGH | Authorization patterns |

#### Tech Stack
- **Frontend:** React + Redux Toolkit + React Router + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose) + Redis (caching)
- **Auth:** JWT (access + refresh tokens)
- **Real-time:** Socket.io
- **File storage:** Multer + Cloudinary/S3
- **Testing:** Jest + React Testing Library + Supertest

#### Architecture
```
client/                          server/
├── src/                         ├── src/
│   ├── components/              │   ├── config/
│   │   ├── common/              │   ├── controllers/
│   │   ├── auth/                │   ├── services/
│   │   ├── projects/            │   ├── models/
│   │   ├── tasks/               │   ├── routes/
│   │   └── dashboard/           │   ├── middleware/
│   ├── hooks/                   │   ├── validators/
│   ├── store/                   │   ├── utils/
│   │   └── slices/              │   ├── socket/
│   ├── pages/                   │   └── app.js
│   ├── services/                │
│   ├── utils/                   │
│   └── App.jsx                  │
```

#### Database Schema (MongoDB)
```javascript
// User
{ _id, name, email, passwordHash, avatar, role, createdAt }

// Project
{ _id, name, description, owner, members: [{ user, role }], createdAt }

// Task
{ _id, title, description, project, assignee, status, priority, 
  dueDate, labels: [], attachments: [], createdBy, createdAt, updatedAt }

// Comment
{ _id, content, task, author, createdAt }

// Activity
{ _id, type, description, project, task, user, createdAt }
```

#### Key APIs
```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/refresh-token

GET    /api/v1/projects
POST   /api/v1/projects
GET    /api/v1/projects/:id
PUT    /api/v1/projects/:id
DELETE /api/v1/projects/:id

GET    /api/v1/projects/:id/tasks
POST   /api/v1/projects/:id/tasks
PATCH  /api/v1/tasks/:id
PATCH  /api/v1/tasks/:id/status
DELETE /api/v1/tasks/:id

GET    /api/v1/tasks/:id/comments
POST   /api/v1/tasks/:id/comments
```

#### Development Phases
1. **Week 1:** Setup, auth (register/login/JWT), user model
2. **Week 2:** Project CRUD, task CRUD, basic API
3. **Week 3:** Frontend — auth pages, project board, task cards
4. **Week 4:** Real-time (Socket.io), drag-and-drop, dashboard
5. **Week 5:** Polish — search, filters, file upload, deployment

---

### Project 2: Real-Time Chat Platform with Scalability Focus

**Why:** Demonstrates backend depth, real-time systems, database design, scalability thinking.

#### Feature List

| Feature | Demonstrates |
|---------|-------------|
| 1:1 messaging | WebSocket, real-time |
| Group chats | Complex data relationships |
| Message history & pagination | Cursor-based pagination |
| Online/offline status | Presence system (Redis) |
| Typing indicators | Real-time events |
| Read receipts | Event tracking |
| File/image sharing | File handling |
| User search | Search implementation |
| Message encryption (basic) | Security awareness |
| Rate limiting | API protection |

#### Tech Stack
- **Backend:** Node.js + Express + Socket.io
- **Database:** MongoDB (messages) + Redis (presence, caching)
- **Frontend:** React (simple UI — focus is backend)
- **Auth:** JWT
- **Deployment:** Docker + Docker Compose

#### Database Schema
```javascript
// User
{ _id, username, email, passwordHash, avatar, lastSeen, isOnline }

// Conversation
{ _id, type: "direct"|"group", participants: [userId], 
  name, lastMessage: { content, sender, timestamp }, createdAt }

// Message
{ _id, conversation, sender, content, type: "text"|"image"|"file",
  readBy: [{ user, readAt }], createdAt }
```

#### Scalability Discussion Points (Interview Gold)
- How would you handle 1M concurrent WebSocket connections?
- How to ensure message ordering?
- How to handle user going offline mid-message?
- Horizontal scaling: sticky sessions vs Redis pub/sub for Socket.io
- Database: partition messages by conversation_id + time range
- Media storage: S3 + CDN, not in database

---

### Project 3: CLI Tool or API Rate Limiter Library (Technical Demo)

**Why:** Shows deep technical skill. Small but impressive. Great for "tell me about something technically interesting you built."

**Option A: Custom API Rate Limiter Middleware**

Build an Express middleware package that implements:
- Token bucket algorithm
- Sliding window algorithm
- Per-user rate limiting
- IP-based rate limiting
- Redis-backed for distributed systems
- Configurable limits
- Response headers (X-RateLimit-Remaining, X-RateLimit-Reset)

**Tech:** Node.js, Redis, Express middleware pattern

**Option B: Developer CLI Tool**

Build a CLI tool that:
- Scaffolds project structure (like create-react-app but custom)
- Generates boilerplate (models, controllers, routes)
- Integrates with Git (auto-init, .gitignore)
- Has interactive prompts (inquirer)

**Tech:** Node.js, Commander.js, Inquirer.js, fs

---

### Project Interview Preparation (For All Projects)

For each project, prepare answers for:

| Question | What They're Testing |
|----------|---------------------|
| Why did you build this? | Motivation, problem-solving |
| Why this tech stack? | Decision-making ability |
| Walk me through the architecture | System understanding |
| How does authentication work? | Security knowledge |
| How is the database designed? | Schema design skills |
| What was the hardest challenge? | Problem-solving, persistence |
| How would you scale to 100K users? | Scalability thinking |
| What would you do differently? | Self-awareness, growth |
| How do you handle errors? | Reliability thinking |
| How do you handle concurrent requests? | Concurrency understanding |
| What if the database goes down? | Fault tolerance |
| How do you deploy this? | DevOps awareness |
| How do you test this? | Testing discipline |
| What security considerations? | Security awareness |
| Show me the API design. | REST/API design skills |

---

## 13. Git + Linux + Cloud Roadmap

### 13.1 Git — **HIGH PRIORITY** (1-2 days focused practice)

#### Essential (Must Know)

| Command | When to Use |
|---------|------------|
| `git init` | Start a new repo |
| `git clone` | Copy remote repo |
| `git add .` / `git add <file>` | Stage changes |
| `git commit -m "msg"` | Save staged changes |
| `git push origin <branch>` | Push to remote |
| `git pull origin <branch>` | Fetch + merge from remote |
| `git branch <name>` | Create branch |
| `git checkout <branch>` / `git switch` | Switch branches |
| `git merge <branch>` | Merge branch into current |
| `git log --oneline -n 10` | View commit history |
| `git status` | Check working tree status |
| `git diff` | See unstaged changes |
| `git stash` / `git stash pop` | Temporarily save changes |

#### Important (Should Know)

| Command | When to Use |
|---------|------------|
| `git rebase <branch>` | Rewrite history for clean commits |
| `git cherry-pick <hash>` | Apply specific commit to current branch |
| `git revert <hash>` | Undo a commit (new commit that reverses) |
| `git reset --soft/--mixed/--hard` | Undo commits with varying levels |
| `git reflog` | Recovery — find lost commits |
| Resolving merge conflicts | Required team skill |
| Pull request workflow | Fork → branch → PR → review → merge |

#### Git Interview Questions

1. `git merge` vs `git rebase`?
2. `git reset` vs `git revert`?
3. What is a merge conflict? How to resolve?
4. What is `git stash`?
5. Explain the Git branching strategy you use.
6. What is `cherry-pick`?
7. How to undo the last commit?
8. What is a pull request?
9. `.gitignore` — what goes in it?
10. `git fetch` vs `git pull`?

---

### 13.2 Linux — **HIGH PRIORITY** (2-3 days)

#### Essential Commands

| Category | Commands |
|----------|---------|
| **Navigation** | `ls`, `cd`, `pwd`, `mkdir`, `rmdir`, `rm -rf` |
| **Files** | `cat`, `head`, `tail`, `less`, `cp`, `mv`, `touch`, `find`, `grep` |
| **Permissions** | `chmod`, `chown`, `ls -la`, understand rwx |
| **Process** | `ps aux`, `top`/`htop`, `kill`, `kill -9`, `bg`, `fg`, `&` |
| **Network** | `curl`, `wget`, `ping`, `netstat`/`ss`, `ifconfig`/`ip` |
| **Ports** | `lsof -i :PORT`, `netstat -tlnp` |
| **Env Variables** | `export`, `echo $VAR`, `.env` files, `source` |
| **Logs** | `tail -f /var/log/...`, `journalctl` |
| **Package** | `apt-get`/`yum`, `npm`, `pip` |
| **Compression** | `tar`, `zip`, `unzip` |
| **Pipes & Redirect** | `|`, `>`, `>>`, `<`, `2>&1` |

---

### 13.3 Docker — **HIGH PRIORITY** (2-3 days)

| Concept | What to Know |
|---------|-------------|
| **What is Docker?** | Containerization, why not VMs |
| **Dockerfile** | FROM, RUN, COPY, WORKDIR, EXPOSE, CMD |
| **docker build** | Build image from Dockerfile |
| **docker run** | Run container, port mapping (-p), env vars (-e), volumes (-v) |
| **docker-compose** | Multi-container apps (app + DB + Redis) |
| **Docker Hub** | Pull/push images |
| **.dockerignore** | Exclude files from build context |

**Practice:** Dockerize your Project 1 (app + MongoDB + Redis in docker-compose).

---

### 13.4 CI/CD — **MEDIUM PRIORITY** (1 day awareness)

| Concept | Depth |
|---------|-------|
| What is CI/CD? | Continuous Integration / Continuous Deployment |
| GitHub Actions | Write a basic workflow: test → build → deploy |
| Pipeline stages | Lint → Test → Build → Deploy |

**Practice:** Add a GitHub Actions workflow to your project that runs tests on every PR.

---

### 13.5 Cloud/AWS — **LOW PRIORITY** (Awareness only)

| Service | What It Does | Depth |
|---------|-------------|-------|
| EC2 | Virtual server | Know what it is |
| S3 | Object storage (files) | Have used for file uploads |
| RDS | Managed database | Know it exists |
| CloudFront | CDN | Know what CDN does |
| Lambda | Serverless functions | Awareness |
| Elastic Beanstalk | Easy deployment | Awareness |

**For SDE-1:** Knowing Docker + basic deployment (Render/Railway/Vercel) is sufficient. Deep AWS can wait.

---

### Priority Summary for Section 13

| Topic | Priority | Time Investment |
|-------|----------|----------------|
| Git (essentials) | 🔴 HIGH | 1 day |
| Git (advanced) | 🟡 MEDIUM | 1 day |
| Linux basics | 🔴 HIGH | 2 days |
| Docker | 🔴 HIGH | 2 days |
| CI/CD basics | 🟡 MEDIUM | 1 day |
| AWS | 🟢 LOW | 1 day (awareness) |
| **Total** | | **~8 days** |
