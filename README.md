# Crisis Companions

An AI-powered assistant for caregivers dealing with sudden health crises. Crisis Companions provides administrative assistance, resource navigation, and emotional support through an intuitive chat interface and organized dashboard.

## 📌 Core App Concept

- AI-powered assistant for caregivers dealing with sudden health crises
- Provides administrative assistance, resource navigation, and emotional support
- Features an AI-led chat interface feeding into a dashboard for structured information

## 🛠️ Technology Stack

- **Frontend**: Next.js with Tailwind CSS + shadcN UI
- **Backend**: Supabase (auth/database)
- **AI**: OpenAI (ChatGPT API)
- **Deployment**: Netlify

## 📐 MVP Structure

### 1. Landing & Signup
- Warm, compassionate design using Tailwind CSS
- Simple signup/authentication flow (email/password) via Supabase
- Clear indication of free vs premium features

### 2. Dashboard Page
- Central place displaying personalized caregiver info
- Clearly organized widgets for quick access

#### Dashboard Widgets:
- AI Chat Panel: Primary interaction space
- Summary Panel: AI-generated summaries of conversations/actions
- Schedule: Editable calendar for appointments/reminders
- Medical Information: Editable form for medications, diagnoses, doctors
- Finances: Editable expenses log
- Recommended Resources: List of AI-recommended local BC services

### 3. AI Chat Integration
- Conversational chat interface with persistent history
- Empathetic emotional support and practical advice
- Action recognition for dashboard updates

### 4. Resource Database
- Structured database of vetted caregiver resources in BC, Canada
- AI access for precise recommendations

### 5. Free vs. Premium Differentiation
- Clearly marked premium features
- Upgrade prompts for enhanced functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Supabase account
- OpenAI API key

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/crisis-companions.git
   cd crisis-companions
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
