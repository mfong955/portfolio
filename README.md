# Writing Assistant Template

A lightweight, intelligent workspace template for AI-assisted writing projects. The AI learns your writing style and maintains project context across sessions, helping you plan, draft, revise, and complete your writing projects.

---

## Quick Start

### For Authors

1. **Start Your Project**: Open this workspace in VSCode
2. **Begin Working**: Start chatting with your AI assistant and ask it to read this file
3. **AI Automatically**: Reads context files and understands your project
4. **Work Naturally**: AI learns your writing preferences over time
5. **Save Session**: Say "save session" - AI immediately saves all progress

**That's it!** The system handles everything automatically.

---

## How It Works

### For AI

The AI reads [`ai_system/rules/aiworkspace.md`](ai_system/rules/aiworkspace.md) which tells it to:

1. Read [`ai_system/memory/user_profile.md`](ai_system/memory/user_profile.md) - Communication style
2. Read [`ai_system/memory/writing_preferences.md`](ai_system/memory/writing_preferences.md) - Writing style and process
3. Read [`project/plan/goals.md`](project/plan/goals.md) - Project objectives
4. Read [`project/plan/progress.md`](project/plan/progress.md) - Current manuscript status
5. Read [`project/context/session_notes.md`](project/context/session_notes.md) - Last session context
6. Read [`project/history/decisions.md`](project/history/decisions.md) - Recent decisions
7. Read [`ai_system/personas/README.md`](ai_system/personas/README.md) - Available assistance personas

**Total: 7 files, ~700-900 tokens** - Fast and efficient!

### For You

- **Edit any file** to update preferences or project info
- **AI sees changes** automatically at next session
- **Full transparency** - see exactly what AI knows
- **Full control** - edit files anytime

---

## AI Personas

The Writing Assistant uses different personas to provide specialized help:

### Available Personas

1. **Writing Coach** ([`writing_coach.md`](ai_system/personas/writing_coach.md))
   - Encouragement and motivation
   - Questioning to deepen ideas
   - Overcoming writer's block
   - Best for: Planning and drafting phases

2. **Editor** ([`editor.md`](ai_system/personas/editor.md))
   - Grammar, style, and clarity
   - Pacing and structure
   - Consistency checking
   - Best for: Revision phase

3. **Researcher** ([`researcher.md`](ai_system/personas/researcher.md))
   - Fact-checking and verification
   - Information gathering
   - Source organization
   - Best for: Research needs

4. **Brainstormer** ([`brainstormer.md`](ai_system/personas/brainstormer.md))
   - Idea generation
   - Creative exploration
   - "What if" thinking
   - Best for: Planning and problem-solving

5. **Critic** ([`critic.md`](ai_system/personas/critic.md))
   - Honest feedback
   - Identifying weaknesses
   - Constructive critique
   - Best for: Evaluation and improvement

### How Personas Work

- **Automatic**: AI adopts appropriate persona based on your current phase
- **Explicit**: Request a specific persona: "Can you review this as an editor?"
- **Flexible**: AI can switch personas or blend them as needed

---

## Repository Structure

```
writing-assistant/
├── README.md                          # This file
├── ai_system/
│   ├── memory/
│   │   ├── user_profile.md           # Communication style & preferences
│   │   └── writing_preferences.md    # Writing style & process
│   ├── personas/
│   │   ├── README.md                 # Persona system overview
│   │   ├── writing_coach.md          # Encouragement persona
│   │   ├── editor.md                 # Editing persona
│   │   ├── researcher.md             # Research persona
│   │   ├── brainstormer.md           # Idea generation persona
│   │   └── critic.md                 # Feedback persona
│   ├── rules/
│   │   └── aiworkspace.md            # AI's instruction file
│   └── templates/
│       ├── fiction_project_template.md      # For novels/stories
│       ├── nonfiction_project_template.md   # For essays/articles
│       └── academic_project_template.md     # For papers/theses
└── project/
    ├── README.md                      # Project workspace guide
    ├── plan/
    │   ├── goals.md                   # Writing project goals
    │   └── progress.md                # Manuscript progress & word count
    ├── context/
    │   └── session_notes.md           # Current session working memory
    ├── history/
    │   └── decisions.md               # Decision log & session summaries
    └── user_resources/
        └── README.md                  # For your reference materials
```

---

## File Purposes

### User Information (ai_system/memory/)

#### [`user_profile.md`](ai_system/memory/user_profile.md)
**What**: Your communication style and working preferences
**Contains**:
- How you like to ask questions
- Your preferred response style
- Working preferences
- Confidence scores for each pattern

**You can edit**: Yes! Update anytime to correct or add preferences

#### [`writing_preferences.md`](ai_system/memory/writing_preferences.md)
**What**: Your writing style, voice, and creative process
**Contains**:
- Voice and prose style preferences
- Genre and theme preferences
- Writing process and habits
- Feedback preferences
- Character and plot approaches

**You can edit**: Yes! Update anytime to specify your preferences

---

### Project Information (project/)

#### [`project/plan/goals.md`](project/plan/goals.md)
**What**: Writing project objectives and what you want to achieve
**Contains**:
- Project title and type
- Genre and target audience
- Story/content goals
- Success criteria
- Timeline and milestones

**You can edit**: Yes! Update as your goals evolve

#### [`project/plan/progress.md`](project/plan/progress.md)
**What**: Current manuscript status and progress
**Contains**:
- Current writing phase
- Word count progress
- Completed sections
- Active tasks
- Recent accomplishments
- Next steps

**You can edit**: Yes! Update regularly to track progress

#### [`project/context/session_notes.md`](project/context/session_notes.md)
**What**: Temporary working memory for current session
**Contains**:
- What you're working on right now
- Recent decisions this session
- Patterns observed
- Notes for next session

**You can edit**: Yes! Add notes for next session
**Note**: AI clears this at session end (important info saved elsewhere)

#### [`project/history/decisions.md`](project/history/decisions.md)
**What**: Chronicle of story/content decisions and session summaries
**Contains**:
- Major project decisions with reasoning
- Session summaries
- Project evolution over time

**You can edit**: Yes! Add context or decisions anytime

---

## How Sessions Work

### Session Start
1. You open workspace and start chatting
2. AI reads the 7 context files
3. AI adopts appropriate persona for your current phase
4. AI greets you with summary of where you left off
5. AI asks what you want to work on today

### During Session
- AI tracks interactions and word count
- Updates session_notes.md with current context
- Every 10 interactions: Checks for patterns to extract
- On major decisions: Updates history/decisions.md
- Switches personas as needed for different tasks

### Save Session
1. You say **"save session"**
2. AI immediately extracts session insights
3. AI updates all relevant files
4. AI clears session_notes.md
5. AI provides session summary with word count

**Note**: The command "save session" is explicit - AI will not ask for confirmation, it will proceed immediately with saving.

---

## Project Templates

### Starting a New Writing Project

The AI can help you set up project structure using templates:

**For Fiction Projects** (Novels, Short Stories, Screenplays):
- Uses [`fiction_project_template.md`](ai_system/templates/fiction_project_template.md)
- Creates: characters/, settings/, plot/, research/, drafts/

**For Non-Fiction Projects** (Essays, Articles, Books, Memoirs):
- Uses [`nonfiction_project_template.md`](ai_system/templates/nonfiction_project_template.md)
- Creates: outline/, research/, sources/, drafts/, notes/

**For Academic Projects** (Papers, Theses, Dissertations):
- Uses [`academic_project_template.md`](ai_system/templates/academic_project_template.md)
- Creates: research/, sources/, outline/, drafts/, data/

**For Other Projects**:
- AI adapts structure based on your needs
- All project files go in `project/` directory

---

## Benefits

✅ **Specialized Help**: Different personas for different writing phases
✅ **Lightweight**: Only 7 core files, ~700-900 tokens to read
✅ **Automatic**: AI handles memory management
✅ **Transparent**: See exactly what AI knows
✅ **Editable**: Full control over all information
✅ **Efficient**: Fixed context usage, scales indefinitely
✅ **Smart**: AI learns your writing style and preferences
✅ **Continuous**: Seamless context across sessions
✅ **Progress Tracking**: Word counts, milestones, accomplishments

---

## Tips for Best Results

### For Authors

1. **Be explicit about preferences**: Tell AI what you like/dislike
2. **Update files regularly**: Keep goals.md and progress.md current
3. **Review preference files**: Check if AI understood you correctly
4. **Save sessions**: Say "save session" when you want to save progress
5. **Add notes**: Use session_notes.md to leave notes for next time
6. **Request personas**: Ask for specific help: "Can you be my editor?"
7. **Track word count**: AI helps you celebrate writing milestones

### For AI Integration

1. **Always read initialization files**: At start of every session
2. **Use appropriate personas**: Match persona to writing phase
3. **Update incrementally**: Don't wait until session end
4. **Extract patterns**: Note repeated behaviors and preferences
5. **Use confidence scores**: Only save patterns you're confident about
6. **Keep files concise**: Extract insights, not conversations
7. **Celebrate progress**: Acknowledge word count and accomplishments

---

## Troubleshooting

### AI doesn't remember context
→ Check if AI read the initialization files
→ Manually remind: "Please read the context files"

### AI misunderstands preferences
→ Edit `ai_system/memory/user_profile.md` or `writing_preferences.md` directly
→ Set confidence to 100% for your corrections

### Project info is outdated
→ Edit `project/plan/goals.md` or `progress.md`
→ AI will see updates at next session

### Need different persona
→ Request explicitly: "Can you be my writing coach right now?"
→ AI will switch to that persona

### Session notes too long
→ AI should auto-compress
→ Manually ask: "Please compress session notes"

---

## Getting Started

1. **Clone or use this template**
2. **Open in VSCode** with AI assistant
3. **Start chatting** - AI will guide you through setup
4. **Describe your project** - Novel, essay, article, etc.
5. **AI creates structure** - Appropriate folders and files
6. **Start writing** - AI adapts to your needs
7. **Save sessions** - Say "save session" to preserve progress

---

## Support

- **File Structure**: See repository structure above
- **File Purposes**: See "File Purposes" section
- **How It Works**: See "How It Works" section
- **Personas**: See "AI Personas" section
- **Editing Guide**: All files are editable - update anytime

---

**Ready to start writing?** Open your workspace and begin chatting with the AI!