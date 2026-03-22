// 1. ORGANIZE QUESTIONS INTO MODULES
const allModules = {
    "module1": [
      {
        "q": "Which field specifically treats the laws governing the motion of machine parts and the forces transmitted by them?",
        "options": ["Thermodynamics", "Science of Mechanism", "Fluid Mechanics", "Statics"],
        "answer": 1
    },
    {
        "q": "What is the division of the theory of machines that deals with motion and forms of machine parts without considering forces?",
        "options": ["Kinetics", "Dynamics", "Pure Mechanism", "Machine Design"],
        "answer": 2
    },
    {
        "q": "Which branch of theory of machines deals with inertia forces arising from the combined effect of mass and motion?",
        "options": ["Kinetics", "Statics", "Kinematics", "Mechanics"],
        "answer": 0
    },
    {
        "q": "What is defined as a combination of resistant bodies arranged to compel mechanical forces of nature to produce work?",
        "options": ["Mechanism", "Structure", "Machine", "Frame"],
        "answer": 2
    },
    {
        "q": "Which of the following is a characteristic of a 'Structure'?",
        "options": ["It converts energy to work", "It has relative motion between parts", "It transmits forces or carries loads", "It modifies motion"],
        "answer": 2
    },
    {
        "q": "The stationary part of a machine that supports moving parts and regulates their path is the:",
        "options": ["Link", "Driver", "Frame", "Follower"],
        "answer": 2
    },
    {
        "q": "What is a 'Rigid Body' in the context of mechanics?",
        "options": ["A body that deforms slightly", "Particles remain at a constant distance", "A body that is liquid", "An infinitesimal part"],
        "answer": 1
    },
    {
        "q": "In a mechanism, the piece that causes or initiates motion is called the:",
        "options": ["Follower", "Connector", "Driver", "Link"],
        "answer": 2
    },
    {
        "q": "A link that can transmit both a push and a pull is known as a:",
        "options": ["Flexible Connector", "Rigid Connector", "Band", "Fluid Link"],
        "answer": 1
    },
    {
        "q": "Which of the following is an example of a Flexible Link?",
        "options": ["Piston", "Belt", "Connecting Rod", "Machine Frame"],
        "answer": 1
    },
    {
        "q": "A 'Fluid Link' transmits motion through:",
        "options": ["Tension only", "Rigid connection", "Fluid pressure", "Magnetic forces"],
        "answer": 2
    },
    {
        "q": "The series of positions occupied by a point in motion is its:",
        "options": ["Cycle", "Path", "Translation", "Period"],
        "answer": 1
    },
    {
        "q": "What type of motion occurs when all points move in circular paths about a common axis?",
        "options": ["Translation", "Rotation", "Reciprocation", "Helical Motion"],
        "answer": 1
    },
    {
        "q": "Motion where every point in a body has the same velocity and direction at any instant is:",
        "options": ["Rotation", "Oscillation", "Translation", "Revolution"],
        "answer": 2
    },
    {
        "q": "A back-and-forth rotation through a specific angle is called:",
        "options": ["Reciprocation", "Oscillation", "Revolution", "Helical Motion"],
        "answer": 1
    },
    {
        "q": "What is the term for a reciprocating translation along a straight line?",
        "options": ["Oscillation", "Reciprocation", "Translation", "Revolution"],
        "answer": 1
    },
    {
        "q": "Which motion combines rotation and translation along the same axis?",
        "options": ["Spherical Motion", "Helical Motion", "Curvilinear Motion", "Revolution"],
        "answer": 1
    },
    {
        "q": "The time required for one complete cycle of a mechanism is called the:",
        "options": ["Frequency", "Period", "Velocity", "Acceleration"],
        "answer": 1
    },
    {
        "q": "A pair of elements where surface contact exists and one envelopes the other is a:",
        "options": ["Higher Pair", "Lower Pair", "Screw Pair", "Flexible Pair"],
        "answer": 1
    },
    {
        "q": "Ball and roller bearings are examples of which type of pair?",
        "options": ["Lower Pair", "Higher Pair", "Sliding Pair", "Turning Pair"],
        "answer": 1
    },
    {
        "q": "What is 'Inversion of Pairs'?",
        "options": ["Turning machine upside down", "Exchanging the fixed element", "Reversing rotation", "Converting higher to lower pair"],
        "answer": 1
    },
    {
        "q": "A sliding pair is a type of lower pair where the relative motion is:",
        "options": ["Pure rotation", "Pure translation", "Helical motion", "Oscillation"],
        "answer": 1
    },
    {
        "q": "In a turning pair, the relative motion between elements is:",
        "options": ["Pure translation", "Pure rotation", "Reciprocation", "Spherical motion"],
        "answer": 1
    },
    {
        "q": "A screw pair involves which combination of motion?",
        "options": ["Rotation and Revolution", "Rotation and Translation", "Translation and Reciprocation", "Oscillation and Rotation"],
        "answer": 1
    },
    {
        "q": "Which of these deals specifically with forces at rest?",
        "options": ["Kinetics", "Statics", "Dynamics", "Kinematics"],
        "answer": 1
    },
    {
        "q": "A link consisting of several bodies moving as one is considered a:",
        "options": ["Structure", "Kinematic Link", "Mechanism", "Particle"],
        "answer": 1
    },
    {
        "q": "The study of the 'form' of machine parts belongs to which division?",
        "options": ["Dynamics", "Kinetics", "Pure Mechanism", "Statics"],
        "answer": 2
    },
    {
        "q": "Which connector can only transmit force when it is pulled?",
        "options": ["Rigid Connector", "Flexible Connector (Band)", "Fluid Connector", "Intermediate Connector"],
        "answer": 1
    },
    {
        "q": "In the definition of a Machine, 'Resistant Bodies' implies:",
        "options": ["Bodies must be flexible", "Bodies must not deform significantly", "Bodies must oppose motion", "Bodies must be fluid"],
        "answer": 1
    },
    {
        "q": "The time-rate of change of position of a point is its:",
        "options": ["Displacement", "Velocity", "Acceleration", "Path"],
        "answer": 1
    },
    {
        "q": "Which motion occurs when a body remains at a constant distance from a fixed point?",
        "options": ["Helical Motion", "Spherical Motion", "Linear Motion", "Reciprocation"],
        "answer": 1
    },
    {
        "q": "What is 'Determinate Motion'?",
        "options": ["Unpredictable motion", "Fixed and compelled motion", "Motion that never stops", "Vacuum-only motion"],
        "answer": 1
    },
    {
        "q": "A link that transmits motion through its own deformation is a:",
        "options": ["Rigid Link", "Flexible Link", "Fluid Link", "Structural Link"],
        "answer": 1
    },
    {
        "q": "Which is NOT one of the three motion forms in a Lower Pair?",
        "options": ["Straight line", "Helix", "Circle", "Parabola"],
        "answer": 3
    },
    {
        "q": "In a higher pair, the contact between elements is described as:",
        "options": ["Surface contact", "Point or line contact", "Total enclosure", "Geometrically identical"],
        "answer": 1
    },
    {
        "q": "If B has a curved channel to envelop A's positions, they form a:",
        "options": ["Lower Pair", "Higher Pair", "Fluid Pair", "Flexible Pair"],
        "answer": 0
    },
    {
        "q": "Which division involves calculating the strength of materials?",
        "options": ["Pure Mechanism", "Constructive Mechanism", "Statics", "Kinematics"],
        "answer": 1
    },
    {
        "q": "A wheel rotating on a fixed axle is an example of a:",
        "options": ["Turning Pair", "Sliding Pair", "Screw Pair", "Higher Pair"],
        "answer": 0
    },
    {
        "q": "Motion in a circular path about an axis NOT passing through the body is:",
        "options": ["Rotation", "Revolution", "Translation", "Oscillation"],
        "answer": 1
    },
    {
        "q": "What happens to 'Relative Motion' during an inversion of a Lower Pair?",
        "options": ["Completely reversed", "It is not affected", "Becomes higher-pair", "Stops completely"],
        "answer": 1
    },
    {
        "q": "A 'Particle' is represented on a mechanical drawing as a:",
        "options": ["Line", "Point", "Circle", "Vector"],
        "answer": 1
    },
    {
        "q": "Mechanical 3D Design uses 'Rigid Body' assumptions to:",
        "options": ["Stop material bending", "Simplify relative motion analysis", "Comply with Laws", "Increase machine strength"],
        "answer": 1
    }
    ],
   "module2": [
        {
            "q": "How is 'Motion' specifically indicated in mechanics?",
            "options": ["Change in velocity", "Change in position", "Application of force", "Constant acceleration"],
            "answer": 1
        },
        {
            "q": "What determines the motion and possesses both direction and sense?",
            "options": ["Vector", "Path", "Displacement", "Link"],
            "answer": 1
        },
        {
            "q": "What type of motion occurs when a point continues indefinitely in a given path in the same sense?",
            "options": ["Reciprocating Motion", "Oscillation", "Continuous Motion", "Intermittent Motion"],
            "answer": 2
        },
        {
            "q": "When a point traverses the same path and reverses its motion at the ends, it is called:",
            "options": ["Continuous Motion", "Reciprocating Motion", "Harmonic Motion", "Uniform Motion"],
            "answer": 1
        },
        {
            "q": "Which term is specifically applied to reciprocating circular motion, such as a pendulum?",
            "options": ["Rotation", "Revolution", "Oscillation", "Retardation"],
            "answer": 2
        },
        {
            "q": "What is motion called when it is interrupted by periods of rest?",
            "options": ["Variable Motion", "Intermittent Motion", "Oscillation", "Inversion"],
            "answer": 1
        },
        {
            "q": "The time rate of motion of a point along its path, expressed in linear units, is:",
            "options": ["Angular Speed", "Linear Speed", "Acceleration", "Velocity Vector"],
            "answer": 1
        },
        {
            "q": "What is the time rate of turning a body about an axis and changing its direction?",
            "options": ["Linear Speed", "Angular Speed", "Revolution", "Frequency"],
            "answer": 1
        },
        {
            "q": "In angular units, one revolution is exactly equal to how many radians?",
            "options": ["π radians", "2π radians", "360 radians", "1.5π radians"],
            "answer": 1
        },
        {
            "q": "What are the standard units for rotational speed (N)?",
            "options": ["rad/s", "deg/min", "rpm or rps", "fpm"],
            "answer": 2
        },
        {
            "q": "The linear speed of a rotating body is equal to the angular speed multiplied by what?",
            "options": ["Diameter", "Radius", "Time", "Circumference"],
            "answer": 1
        },
        {
            "q": "According to the lecture, what is the economical speed for leather belting?",
            "options": ["3000 fpm", "4500 fpm", "5000 fpm", "1760 rpm"],
            "answer": 1
        },
        {
            "q": "In 'Uniform Motion', what is the value of acceleration?",
            "options": ["Constant", "Zero", "Varying", "Infinite"],
            "answer": 1
        },
        {
            "q": "What type of motion is characterized by constant acceleration?",
            "options": ["Uniform Motion", "Uniformly Varying Motion", "Variable Acceleration", "Harmonic Motion"],
            "answer": 1
        },
        {
            "q": "When speed changes by equal amounts in equal intervals of time, the motion is:",
            "options": ["Uniformly Varying", "Variable", "Intermittent", "Harmonic"],
            "answer": 0
        },
        {
            "q": "If acceleration is a function of distance, velocity, or time, it is classified as:",
            "options": ["Uniform", "Constant", "Variable Acceleration", "Zero Acceleration"],
            "answer": 2
        },
        {
            "q": "Which motion features acceleration that varies directly as the displacement?",
            "options": ["Reciprocating Motion", "Oscillation", "Harmonic Motion", "Variable Integration"],
            "answer": 2
        },
        {
            "q": "Which graphical method should be used if you are given distance and time?",
            "options": ["Graphical Integration", "Graphical Differentiation", "Vector Analysis", "Linear Regression"],
            "answer": 1
        },
        {
            "q": "Which graphical method should be used if you are given acceleration and time?",
            "options": ["Graphical Differentiation", "Graphical Integration", "Harmonic Analysis", "Statics Analysis"],
            "answer": 1
        }
    ]
};

// 2. STATE VARIABLES
let currentQuestions = []; // This will hold the active module's list
let current = 0;
let score = 0;

// 3. NAVIGATION FUNCTIONS
function startModule(moduleName) {
    // Pick the questions based on the button clicked
    currentQuestions = allModules[moduleName];
    current = 0;
    score = 0;

    // UI Toggle
    document.getElementById("menu-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result").innerText = "";

    loadQuestion();
}

function returnToMenu() {
    if (confirm("Gusto ka mobalik sa Menu or Niya? Your progress will be reset.")) {
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("menu-container").style.display = "block";
    }
}

// 4. CORE QUIZ LOGIC
function loadQuestion() {
    const q = currentQuestions[current];
    document.getElementById("question").innerText = q.q;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; 

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn"); 
        btn.onclick = () => checkAnswer(index);
        choicesDiv.appendChild(btn);
    });
}

function checkAnswer(choice) {
    const q = currentQuestions[current];
    const buttons = document.querySelectorAll(".option-btn");
    const result = document.getElementById("result");

    buttons.forEach((btn, index) => {
        btn.disabled = true; 
        if (index === q.answer) {
            btn.classList.add("correct"); 
        } else if (index === choice) {
            btn.classList.add("wrong"); 
        }
    });

    if (choice === q.answer) {
        result.innerText = "Correct!";
        score++;
    } else {
        result.innerText = "Wrong!";
    }

    setTimeout(() => {
        current++;
        if (current < currentQuestions.length) {
            result.innerText = "";
            loadQuestion();
        } else {
            showFinalScore();
        }
    }, 2000); 
}

function showFinalScore() {
    document.getElementById("question").innerText = `Quiz Finished! Your Score: ${score}/${currentQuestions.length}`;
    document.getElementById("choices").innerHTML = `
        <button class="module-btn" onclick="returnToMenu()">Try Another Module</button>
    `;
    document.getElementById("result").innerText = "";
}
