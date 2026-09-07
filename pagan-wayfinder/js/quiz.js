/* Pagan Wayfinder – Interactive Path Quiz
   12 questions → interest scores → tradition recommendations
*/

const questions = [
  {
    id: 1,
    text: "Which setting feels most nourishing to your spirit?",
    options: [
      { label: "A quiet forest or garden filled with plants", scores: { nature: 3, seasonal: 2, magic: 1 } },
      { label: "A candlelit circle or carefully prepared ritual space", scores: { ritual: 3, magic: 2, deity: 1 } },
      { label: "An old stone circle, museum, or historical site", scores: { history: 3, mythology: 2, reconstruction: 2 } },
      { label: "A personal study filled with books, journals, and tarot cards", scores: { divination: 3, mythology: 2, magic: 1 } }
    ]
  },
  {
    id: 2,
    text: "When you think about the divine, what resonates most?",
    options: [
      { label: "The living Earth itself – plants, animals, seasons, and cycles", scores: { nature: 3, seasonal: 2 } },
      { label: "Specific gods and goddesses with stories, personalities, and relationships", scores: { deity: 3, mythology: 3 } },
      { label: "A more abstract sacred force or the interconnected web of all things", scores: { magic: 2, nature: 1, eclectic: 2 } },
      { label: "I prefer to focus on practice and experience rather than theology", scores: { ritual: 2, magic: 2, nature: 1 } }
    ]
  },
  {
    id: 3,
    text: "How do you feel about structured ritual?",
    options: [
      { label: "I love formal, well-crafted rituals with clear steps", scores: { ritual: 3, reconstruction: 2 } },
      { label: "I enjoy simple, heartfelt practices that change with the seasons", scores: { seasonal: 3, nature: 2 } },
      { label: "I prefer spontaneous or highly personal magic and spellwork", scores: { magic: 3, eclectic: 2 } },
      { label: "I'm more drawn to meditation, study, and quiet contemplation", scores: { mythology: 2, history: 2, divination: 1 } }
    ]
  },
  {
    id: 4,
    text: "Which of these interests you most right now?",
    options: [
      { label: "Working with herbs, plants, and the land around me", scores: { nature: 3, seasonal: 2, magic: 1 } },
      { label: "Learning the myths and stories of a particular culture", scores: { mythology: 3, history: 2, reconstruction: 2 } },
      { label: "Developing a daily or seasonal spiritual practice", scores: { seasonal: 2, ritual: 2, nature: 1 } },
      { label: "Exploring divination tools (tarot, runes, ogham, etc.)", scores: { divination: 3, magic: 1 } }
    ]
  },
  {
    id: 5,
    text: "How important is historical accuracy or reconstruction to you?",
    options: [
      { label: "Very important – I want practices rooted in scholarly research", scores: { reconstruction: 3, history: 3 } },
      { label: "Somewhat – I value tradition but also modern adaptation", scores: { history: 2, mythology: 1, ritual: 1 } },
      { label: "Not especially – I prefer what feels true and effective now", scores: { eclectic: 3, magic: 2 } },
      { label: "I'm still figuring that out", scores: { nature: 1, seasonal: 1 } }
    ]
  },
  {
    id: 6,
    text: "Which seasonal marker feels most meaningful?",
    options: [
      { label: "Solstices and equinoxes – the turning of the sun", scores: { seasonal: 3, nature: 2 } },
      { label: "Agricultural festivals and harvest times", scores: { seasonal: 3, nature: 2, ritual: 1 } },
      { label: "The dark half of the year and ancestral remembrance", scores: { mythology: 2, deity: 1, history: 1 } },
      { label: "I don't strongly follow a seasonal calendar yet", scores: { magic: 1, eclectic: 1 } }
    ]
  },
  {
    id: 7,
    text: "What role does magic or spellcraft play in your interest?",
    options: [
      { label: "Central – I want practical magical skills", scores: { magic: 3, ritual: 1 } },
      { label: "Supportive – magic as part of a broader spiritual path", scores: { magic: 2, nature: 1, ritual: 1 } },
      { label: "Minimal – I'm more focused on devotion, study, or nature connection", scores: { deity: 2, mythology: 2, nature: 1 } },
      { label: "I'm curious but still learning what it means to me", scores: { magic: 1, divination: 1 } }
    ]
  },
  {
    id: 8,
    text: "Which cultural or regional inspiration draws you?",
    options: [
      { label: "Celtic lands and traditions", scores: { celtic: 3, mythology: 1 } },
      { label: "Norse / Germanic / Heathen traditions", scores: { norse: 3, mythology: 1 } },
      { label: "Greek / Hellenic traditions", scores: { hellenic: 3, mythology: 1 } },
      { label: "A mix of many sources, or something else entirely", scores: { eclectic: 3, nature: 1 } }
    ]
  },
  {
    id: 9,
    text: "How do you prefer to learn?",
    options: [
      { label: "Through books, history, and careful study", scores: { history: 3, mythology: 2, reconstruction: 1 } },
      { label: "Through direct experience in nature", scores: { nature: 3, seasonal: 2 } },
      { label: "Through ritual practice and community", scores: { ritual: 3, deity: 1 } },
      { label: "Through personal experimentation and journaling", scores: { magic: 2, divination: 2, eclectic: 1 } }
    ]
  },
  {
    id: 10,
    text: "What feels most important in a spiritual path?",
    options: [
      { label: "Connection with the natural world and ecological awareness", scores: { nature: 3, seasonal: 2 } },
      { label: "Relationship with deities or spirits", scores: { deity: 3, mythology: 2 } },
      { label: "Personal empowerment and transformation", scores: { magic: 3, ritual: 1 } },
      { label: "Continuity with ancestral or cultural traditions", scores: { reconstruction: 3, history: 2 } }
    ]
  },
  {
    id: 11,
    text: "Which of these activities appeals to you most?",
    options: [
      { label: "Creating an altar or outdoor sacred space", scores: { ritual: 2, nature: 2, seasonal: 1 } },
      { label: "Reading primary sources and scholarly works", scores: { history: 3, reconstruction: 2 } },
      { label: "Working with crystals, herbs, or divinatory tools", scores: { magic: 2, divination: 3, nature: 1 } },
      { label: "Writing prayers, poetry, or personal mythology", scores: { mythology: 2, deity: 2, eclectic: 1 } }
    ]
  },
  {
    id: 12,
    text: "Finally – what are you hoping a path might give you?",
    options: [
      { label: "A deeper sense of belonging in the natural world", scores: { nature: 3, seasonal: 2 } },
      { label: "Meaningful relationship with the divine or spirits", scores: { deity: 3, mythology: 1 } },
      { label: "Tools for personal growth, healing, and agency", scores: { magic: 3, ritual: 1 } },
      { label: "A living connection to history, ancestors, and culture", scores: { history: 2, reconstruction: 3 } }
    ]
  }
];

/* Map interest scores to tradition recommendations */
const traditionMap = {
  "Green Witchcraft": { nature: 4, seasonal: 3, magic: 2, ritual: 1 },
  "Druidry": { nature: 3, seasonal: 3, mythology: 2, history: 2, ritual: 1 },
  "Wicca": { ritual: 3, magic: 3, seasonal: 2, deity: 2 },
  "Heathenry": { norse: 4, mythology: 3, history: 2, reconstruction: 2, deity: 2 },
  "Hellenism": { hellenic: 4, mythology: 3, deity: 3, reconstruction: 2, history: 1 },
  "Celtic Paganism": { celtic: 4, mythology: 3, nature: 2, seasonal: 1 },
  "Norse Paganism": { norse: 4, mythology: 3, deity: 2, history: 1 },
  "Eclectic Paganism": { eclectic: 4, magic: 2, nature: 1, seasonal: 1 },
  "Reconstructionism": { reconstruction: 4, history: 3, mythology: 2 }
};

const traditionLinks = {
  "Green Witchcraft": "../explore/green-witchcraft.html",
  "Druidry": "../explore/druidry.html",
  "Wicca": "../explore/wicca.html",
  "Heathenry": "../explore/heathenry.html",
  "Hellenism": "../explore/hellenism.html",
  "Celtic Paganism": "../explore/celtic-paganism.html",
  "Norse Paganism": "../explore/norse-paganism.html",
  "Eclectic Paganism": "../explore/eclectic-paganism.html",
  "Reconstructionism": "../explore/reconstructionism.html"
};

const traditionDescriptions = {
  "Green Witchcraft": "Your answers showed strong affinity for plants, the land, seasonal cycles, and practical, nature-based magic.",
  "Druidry": "You are drawn to nature, seasonal awareness, mythology, and contemplative practice rooted in the landscape.",
  "Wicca": "Ritual structure, magical practice, and seasonal celebration stand out clearly in your responses.",
  "Heathenry": "Norse/Germanic cultural interest, mythology, and often a reconstructionist or ancestral focus appear strongly.",
  "Hellenism": "Greek mythology, deity relationships, and classical tradition resonate with your answers.",
  "Celtic Paganism": "Celtic cultural inspiration, mythology, and nature connection are prominent themes for you.",
  "Norse Paganism": "Norse myth, deities, and cultural heritage form a clear thread through your responses.",
  "Eclectic Paganism": "You value personal synthesis, flexibility, and drawing from multiple sources rather than a single tradition.",
  "Reconstructionism": "Historical accuracy, primary sources, and carefully researched practice are especially important to you."
};

let currentQuestion = 0;
let answers = [];
let scores = {};

function initQuiz() {
  const container = document.getElementById('quiz-app');
  if (!container) return;

  // Reset state
  currentQuestion = 0;
  answers = [];
  scores = {};

  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById('quiz-app');
  const q = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  container.innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-bar" style="width: ${progress}%"></div>
    </div>
    <div class="question-card">
      <div class="question-number">Question ${currentQuestion + 1} of ${questions.length}</div>
      <div class="question-text">${q.text}</div>
      <div class="options">
        ${q.options.map((opt, i) => `
          <button class="option" data-index="${i}">
            ${opt.label}
          </button>
        `).join('')}
      </div>
      <div class="quiz-nav">
        ${currentQuestion > 0 ? `<button class="btn btn-secondary" id="prev-btn">← Previous</button>` : '<div></div>'}
        <button class="btn btn-primary" id="next-btn" disabled>Next →</button>
      </div>
    </div>
  `;

  // Option selection
  let selectedIndex = answers[currentQuestion] !== undefined ? answers[currentQuestion] : null;

  if (selectedIndex !== null) {
    const opts = container.querySelectorAll('.option');
    opts[selectedIndex].classList.add('selected');
    document.getElementById('next-btn').disabled = false;
  }

  container.querySelectorAll('.option').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedIndex = parseInt(btn.dataset.index);
      answers[currentQuestion] = selectedIndex;
      document.getElementById('next-btn').disabled = false;
    });
  });

  // Navigation
  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', () => {
    if (selectedIndex === null) return;
    answers[currentQuestion] = selectedIndex;

    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      renderQuestion();
    } else {
      calculateResults();
    }
  });

  const prevBtn = document.getElementById('prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentQuestion--;
      renderQuestion();
    });
  }
}

function calculateResults() {
  // Tally scores
  scores = {};
  answers.forEach((ansIdx, qIdx) => {
    const option = questions[qIdx].options[ansIdx];
    for (const [key, val] of Object.entries(option.scores)) {
      scores[key] = (scores[key] || 0) + val;
    }
  });

  // Score each tradition
  const traditionScores = [];
  for (const [name, weights] of Object.entries(traditionMap)) {
    let total = 0;
    for (const [key, weight] of Object.entries(weights)) {
      total += (scores[key] || 0) * weight;
    }
    traditionScores.push({ name, total });
  }

  // Sort and take top 3
  traditionScores.sort((a, b) => b.total - a.total);
  const top3 = traditionScores.slice(0, 3);

  renderResults(top3);
}

function renderResults(top3) {
  const container = document.getElementById('quiz-app');

  container.innerHTML = `
    <div class="results-card">
      <h2>Your Pagan Wayfinder Map</h2>
      <p class="lead" style="margin: 0 auto 1.5rem; max-width: 520px;">
        These are starting points for exploration — not labels or fixed identities.
      </p>

      <ul class="path-list">
        ${top3.map((t, i) => `
          <li>
            <strong>${i + 1}. ${t.name}</strong>
            <p>${traditionDescriptions[t.name]}</p>
            <a href="${traditionLinks[t.name]}" class="card-link">Explore ${t.name} →</a>
          </li>
        `).join('')}
      </ul>

      <p style="color: var(--muted); font-size: 0.95rem; margin-top: 1.5rem;">
        Your strongest interests also included themes around nature connection, seasonal practice, 
        mythology, ritual, and personal meaning-making. Feel free to revisit any path that calls to you.
      </p>

      <div class="btn-group" style="justify-content: center; margin-top: 2rem;">
        <button class="btn btn-primary" id="restart-quiz">Retake the Quiz</button>
        <a href="../explore/index.html" class="btn btn-secondary">Browse All Paths</a>
      </div>
    </div>
  `;

  document.getElementById('restart-quiz').addEventListener('click', initQuiz);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initQuiz);
