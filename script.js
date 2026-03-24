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
    ],
    "module3": [
        {
            "q": "What is an arm that rotates or oscillates about an axis called?",
            "options": ["Link", "Crank", "Node", "Coupler"],
            "answer": 1
        },
        {
            "q": "When two cranks are rigidly connected to each other on the same axis, they form a:",
            "options": ["Binary Link", "Mechanism", "Lever", "Joint"],
            "answer": 2
        },
        {
            "q": "What is a lever called if the angle between its two arms is less than 90°?",
            "options": ["Rocker", "Bell Crank Lever", "Binary Link", "Slider"],
            "answer": 1
        },
        {
            "q": "A lever is classified as a 'Rocker' if the angle between its arms is:",
            "options": ["Exactly 90°", "Less than 90°", "More than 90°", "Exactly 180°"],
            "answer": 2
        },
        {
            "q": "What is a rigid piece that transmits force from one piece to another and has at least two nodes?",
            "options": ["Joint", "Link", "Frame", "Shaft"],
            "answer": 1
        },
        {
            "q": "What are the specific points on a link used for attachment to other links?",
            "options": ["Nodes", "Pivots", "Axes", "Centers"],
            "answer": 0
        },
        {
            "q": "How many nodes does a 'Ternary Link' possess?",
            "options": ["2", "3", "4", "5"],
            "answer": 1
        },
        {
            "q": "A link with four nodes is known as a:",
            "options": ["Binary Link", "Ternary Link", "Quaternary Link", "Complex Link"],
            "answer": 2
        },
        {
            "q": "An interconnected system of links where NO single link is fixed is a:",
            "options": ["Mechanism", "Kinematic Chain", "Structure", "Inversion"],
            "answer": 1
        },
        {
            "q": "A kinematic chain becomes a 'Mechanism' when:",
            "options": ["It has 4 links", "One of the links is fixed", "It starts moving", "All links are binary"],
            "answer": 1
        },
        {
            "q": "In a four-bar linkage, what is the rigid rod that connects the two cranks?",
            "options": ["Frame", "Line of Centers", "Coupler", "Node"],
            "answer": 2
        },
        {
            "q": "The distance between the two fixed centers in a four-bar linkage is the:",
            "options": ["Path", "Coupler length", "Line of Centers", "Displacement"],
            "answer": 2
        },
        {
            "q": "Which mechanism is a special form of four-bar linkage where the slot centerline passes through shaft Q2?",
            "options": ["Double-Crank", "Slider-Crank", "Crank-Rocker", "Oscillator"],
            "answer": 1
        },
        {
            "q": "What is another name for a kinematic pair?",
            "options": ["Node", "Link", "Joint", "Crank"],
            "answer": 2
        },
        {
            "q": "A 'Simple Joint' is a connection that joins how many links?",
            "options": ["One", "Two", "Three", "Four"],
            "answer": 1
        },
        {
            "q": "A joint connecting more than two links is classified as a:",
            "options": ["Binary Joint", "Simple Joint", "Complex Joint", "Higher Pair"],
            "answer": 2
        },
        {
            "q": "What is the term for the number of independent inputs required to position a mechanism?",
            "options": ["Kinematic Chain", "Degrees of Freedom", "Inversion", "Angular Speed"],
            "answer": 1
        },
        {
            "q": "A joint with surface contact, such as a pin or slider, is a:",
            "options": ["Higher Pair", "Lower Pair", "Complex Joint", "Flexible Link"],
            "answer": 1
        },
        {
            "q": "Gears and cams, which have point or line contact, are examples of:",
            "options": ["Lower Pairs", "Higher Pairs", "Simple Joints", "Binary Links"],
            "answer": 1
        },
        {
            "q": "A four-bar linkage where both cranks can make a full revolution is a:",
            "options": ["Crank-Rocker", "Double-Rocker", "Double-Crank", "Slider-Crank"],
            "answer": 2
        }
    ],
    "module4": [
        {
            "q": "What is the number of independent coordinates required to define a mechanism's position called?",
            "options": ["Mobility", "Degrees of Freedom", "Kinematic Chain", "Kutzbach Value"],
            "answer": 1
        },
        {
            "q": "In the context of a mechanism, what is another term for Degree of Freedom (DOF)?",
            "options": ["Rotation", "Inversion", "Mobility", "Linkage"],
            "answer": 2
        },
        {
            "q": "A kinematic chain where every link is connected to at least two others, forming a loop, is a:",
            "options": ["Open Mechanism Chain", "Closed Mechanism Chain", "Structure", "Binary Chain"],
            "answer": 1
        },
        {
            "q": "What is a mechanism called when all links move in the same or parallel planes?",
            "options": ["Spherical Mechanism", "Planar Mechanism", "Linear Mechanism", "Spatial Mechanism"],
            "answer": 1
        },
        {
            "q": "Which equation is used to find the mobility (m) of a planar mechanism?",
            "options": ["m = 2(n-1) - 3j", "m = 3(n-1) - 2j1 - j2", "m = n - 2j + 1", "m = 3n - 2j"],
            "answer": 1
        },
        {
            "q": "In Kutzbach's equation, what does the variable 'n' represent?",
            "options": ["Number of joints", "Number of nodes", "Number of links", "Number of outputs"],
            "answer": 2
        },
        {
            "q": "A low-pair joint (j1) reduces the mobility of a mechanism by how many DOF?",
            "options": ["1", "2", "3", "0"],
            "answer": 1
        },
        {
            "q": "A high-pair joint (j2), such as a cam or gear, reduces mobility by how many DOF?",
            "options": ["1", "2", "3", "0"],
            "answer": 0
        },
        {
            "q": "If the calculated mobility (m) is equal to 0, the system is classified as a:",
            "options": ["Mechanism", "Structure", "Preloaded Structure", "Kinematic Chain"],
            "answer": 1
        },
        {
            "q": "What does a mobility result of m < 0 (e.g., -1 or -2) indicate?",
            "options": ["A standard mechanism", "A preloaded structure", "An open chain", "A simple joint"],
            "answer": 1
        },
        {
            "q": "A mechanism with mobility m = 1 requires how many independent inputs to produce a predictable output?",
            "options": ["Zero", "One", "Two", "Three"],
            "answer": 1
        },
        {
            "q": "If m = 2, the mechanism requires how many motors or inputs to control its motion?",
            "options": ["1", "2", "3", "4"],
            "answer": 1
        },
        {
            "q": "Calculate mobility: n=3 links, j1=3 joints, j2=0 joints. What is m?",
            "options": ["-1", "0", "1", "2"],
            "answer": 1
        },
        {
            "q": "Calculate mobility: n=4 links, j1=4 joints, j2=0 joints. What is m?",
            "options": ["0", "1", "2", "3"],
            "answer": 1
        },
        {
            "q": "Calculate mobility: n=5 links, j1=5 joints, j2=0 joints. What is m?",
            "options": ["0", "1", "2", "3"],
            "answer": 2
        },
        {
            "q": "Which type of joint is a pin connection or a sliding block considered?",
            "options": ["Lower-pair (j1)", "Higher-pair (j2)", "Binary link", "Complex node"],
            "answer": 0
        },
        {
            "q": "Which type of joint is a roller or a cam considered in mobility calculations?",
            "options": ["Lower-pair (j1)", "Higher-pair (j2)", "Fixed link", "Ternary link"],
            "answer": 1
        },
        {
            "q": "How many DOF are there in a planar higher-pair joint before it is constrained?",
            "options": ["3 DOF", "6 DOF", "1 DOF", "5 DOF"],
            "answer": 0
        },
        {
            "q": "In a closed kinematic chain, how many links is each link connected to at minimum?",
            "options": ["One", "Two", "Three", "Four"],
            "answer": 1
        },
        {
            "q": "According to the lecture exercises, what is the economical speed for leather belting?",
            "options": ["3000 fpm", "4500 fpm", "5000 fpm", "1760 fpm"],
            "answer": 1
        }
    ],
    "module5": [
        {
            "q": "What is the process of choosing different links in a kinematic chain to be the frame called?",
            "options": ["Kinematic Synthesis", "Kinematic Inversion", "Mobility Analysis", "Dimensional Design"],
            "answer": 1
        },
        {
            "q": "How many possible kinematic inversions does a four-bar linkage have?",
            "options": ["2", "3", "4", "Unlimited"],
            "answer": 2
        },
        {
            "q": "In a kinematic inversion, what happens to the relative motion between the links?",
            "options": ["It changes completely", "It is not affected", "It becomes indeterminate", "It doubles"],
            "answer": 1
        },
        {
            "q": "Which inequality represents a Class I (Grashof) linkage?",
            "options": ["S + L > P + Q", "S + L = P + Q", "S + L < P + Q", "S + P < L + Q"],
            "answer": 2
        },
        {
            "q": "In the Grashof condition formula, what does 'S' and 'L' represent?",
            "options": ["Static and Linear", "Side and Lever", "Shortest and Longest link", "Slotted and Linked"],
            "answer": 2
        },
        {
            "q": "If S + L > P + Q, the linkage is Class II, meaning all its inversions are:",
            "options": ["Double-Cranks", "Crank-Rockers", "Triple-Rockers", "Parallelograms"],
            "answer": 2
        },
        {
            "q": "To create a 'Double-Crank' (Drag-Link) mechanism, which link must be grounded?",
            "options": ["The longest link (L)", "The shortest link (S)", "Any link adjacent to S", "The link opposite to S"],
            "answer": 1
        },
        {
            "q": "If you ground a link adjacent to the shortest link in a Class I linkage, you get a:",
            "options": ["Double-Crank", "Crank-Rocker", "Double-Rocker", "Structure"],
            "answer": 1
        },
        {
            "q": "If you ground the link opposite to the shortest link in a Class I linkage, you get a:",
            "options": ["Double-Crank", "Crank-Rocker", "Double-Rocker", "Change Point"],
            "answer": 2
        },
        {
            "q": "In a Double-Rocker inversion of a Grashof linkage, which link is the only one that can fully rotate?",
            "options": ["The ground link", "The input link", "The output link", "The coupler link"],
            "answer": 3
        },
        {
            "q": "A linkage has lengths 3, 5, 7, and 8. What is the Grashof condition?",
            "options": ["Grashof (3+8 < 5+7)", "Non-Grashof (3+8 > 5+7)", "Special-case (3+8 = 5+7)", "Not a linkage"],
            "answer": 0
        },
        {
            "q": "A linkage has lengths 4, 9, 5, and 10. What is the Grashof condition?",
            "options": ["Grashof (4+10 < 9+5)", "Non-Grashof (4+10 > 9+5)", "Special-case (4+10 = 9+5)", "Structure"],
            "answer": 2
        },
        {
            "q": "What occurs in a Class III (Special-case) Grashof linkage when links become collinear?",
            "options": ["Inversion", "Change Point", "Locking", "Acceleration"],
            "answer": 1
        },
        {
            "q": "At a 'Change Point', the output behavior of the linkage is:",
            "options": ["Predictable", "Indeterminate", "Constant", "Zero"],
            "answer": 1
        },
        {
            "q": "Which mechanism is a common application of a Crank-Rocker?",
            "options": ["Car Engine", "Windshield Wiper", "Differential Gear", "Bicycle Pedal"],
            "answer": 1
        },
        {
            "q": "In a slider-crank inversion where the slider block is stationary, which inversion is it?",
            "options": ["Inversion #1", "Inversion #2", "Inversion #3", "Inversion #4"],
            "answer": 3
        },
        {
            "q": "How many links in a Class I linkage are capable of making a full revolution?",
            "options": ["None", "At least one", "Only the longest", "All four"],
            "answer": 1
        },
        {
            "q": "In the 'Parallelogram' linkage application, the input motion is:",
            "options": ["Reversed", "Duplicated at a remote location", "Converted to linear motion", "Stopped"],
            "answer": 1
        },
        {
            "q": "If a four-bar linkage has lengths 2, 6, 7, and 10, is it Grashof?",
            "options": ["Yes (2+10 < 6+7)", "No (2+10 > 6+7)", "Yes (2+10 = 12)", "No (2+10 = 12)"],
            "answer": 1
        },
        {
            "q": "A Class II linkage is also known as a:",
            "options": ["Grashof Linkage", "Non-Grashof Linkage", "Special Linkage", "Collinear Linkage"],
            "answer": 1
        }
    ],
    "module6": [
        {
            "q": "What is the term for defining the proper type of mechanism (e.g., linkage vs. cam) best suited for a task?",
            "options": ["Dimensional Synthesis", "Type Synthesis", "Qualitative Synthesis", "Analytical Synthesis"],
            "answer": 1
        },
        {
            "q": "Determining the specific lengths of links necessary to accomplish a motion is called:",
            "options": ["Type Synthesis", "Dimensional Synthesis", "Function Generation", "Path Generation"],
            "answer": 1
        },
        {
            "q": "Which task involves correlating an input motion with a specific output motion?",
            "options": ["Path Generation", "Motion Generation", "Function Generation", "Type Synthesis"],
            "answer": 2
        },
        {
            "q": "Controlling a point so that it follows a specific prescribed path is known as:",
            "options": ["Path Generation", "Motion Generation", "Function Generation", "Dimensional Synthesis"],
            "answer": 0
        },
        {
            "q": "Controlling a line in a plane so that it assumes a set of sequential positions is:",
            "options": ["Path Generation", "Motion Generation", "Function Generation", "Type Synthesis"],
            "answer": 1
        },
        {
            "q": "What is a two-link chain used as a building block for mechanism synthesis called?",
            "options": ["Binary Link", "Dyad", "Coupler", "Inversion"],
            "answer": 1
        },
        {
            "q": "In graphical synthesis, what geometric construction is used to find the center of rotation between two points?",
            "options": ["Tangent Line", "Parallel Offset", "Perpendicular Bisector", "Arc Intersection"],
            "answer": 2
        },
        {
            "q": "In a 3-position synthesis, the intersection of two perpendicular bisectors for point C defines:",
            "options": ["The Moving Pivot", "The Ground Pivot (O2)", "The Coupler length", "The Change Point"],
            "answer": 1
        },
        {
            "q": "A linkage designed for two positions, like a car hood or a toaster, is an example of:",
            "options": ["Path Generation", "Two-position Dimensional Synthesis", "Complex Synthesis", "Analytical Inversion"],
            "answer": 1
        },
        {
            "q": "The points C and D on the coupler that connect to the cranks are known as:",
            "options": ["Fixed Pivots", "Moving Pivots", "Nodes", "Dyads"],
            "answer": 1
        },
        {
            "q": "Which type of synthesis occurs in the absence of a well-defined algorithm?",
            "options": ["Qualitative Synthesis", "Quantitative Synthesis", "Analytical Synthesis", "Precision Synthesis"],
            "answer": 0
        },
        {
            "q": "When designing for motion generation, the 'output' part of the linkage is usually the:",
            "options": ["Ground Link", "Crank", "Coupler", "Slider"],
            "answer": 2
        },
        {
            "q": "To find a fixed pivot for a point moving from C1 to C2, you must bisect the line segment:",
            "options": ["C1D1", "C2D2", "C1C2", "O2O4"],
            "answer": 2
        },
        {
            "q": "If you are designing a linkage to move a part through three specific positions, you are performing:",
            "options": ["Two-position synthesis", "Three-position synthesis", "Type synthesis", "Mobility analysis"],
            "answer": 1
        },
        {
            "q": "The stationary attachment points of a mechanism are labeled as:",
            "options": ["C and D", "S and L", "O2 and O4", "P and Q"],
            "answer": 2
        },
        {
            "q": "The final step in graphical synthesis often involves checking the:",
            "options": ["Grashof Condition", "Weight of links", "Color of parts", "Number of nodes"],
            "answer": 0
        },
        {
            "q": "In dimensional synthesis, 'precision points' refer to:",
            "options": ["The sharp edges of a link", "The exact positions the mechanism must reach", "The tolerances of the pins", "The centers of the nodes"],
            "answer": 1
        },
        {
            "q": "A linkage designed to duplicate motion at a remote location is a:",
            "options": ["Slider-Crank", "Parallelogram Linkage", "Crank-Rocker", "Triple-Rocker"],
            "answer": 1
        },
        {
            "q": "Which method is primarily used for quantitative dimensional synthesis of cams?",
            "options": ["Qualitative", "Analytical", "Type", "Intermittent"],
            "answer": 1
        },
        {
            "q": "If a synthesis result is 'Non-Grashof' but requires full rotation, what must be added?",
            "options": ["A second ground", "A motor dyad", "A ternary link", "A sliding joint"],
            "answer": 1
        }
    ],
    "module7": [
        {
            "q": "What is a point common to two bodies where the absolute instantaneous velocity is the same for both?",
            "options": ["Centroid", "Instant Center", "Node", "Pivot"],
            "answer": 1
        },
        {
            "q": "What are two other names often used for Instant Centers?",
            "options": ["Nodes and Links", "Centros and Poles", "Pivots and Joints", "Cams and Followers"],
            "answer": 1
        },
        {
            "q": "An Instant Center that is not a physical pin joint is referred to as a:",
            "options": ["Fixed Point", "Permanent Center", "Virtual Common Point", "Slider Joint"],
            "answer": 2
        },
        {
            "q": "Which type of Instant Centers remain in the same place for all configurations?",
            "options": ["Moving ICs", "Permanent ICs", "Fixed ICs", "Collinear ICs"],
            "answer": 2
        },
        {
            "q": "Instant Centers located at the physical joints that move with the mechanism are:",
            "options": ["Fixed ICs", "Permanent ICs", "Moving ICs", "Virtual ICs"],
            "answer": 1
        },
        {
            "q": "How many Instant Centers are in a mechanism with 4 links?",
            "options": ["4", "6", "8", "12"],
            "answer": 1
        },
        {
            "q": "What is the formula to calculate the number of Instant Centers (N) for 'n' links?",
            "options": ["n(n-1)/2", "3(n-1)", "2n-1", "n^2"],
            "answer": 0
        },
        {
            "q": "Kennedy's Rule states that three bodies moving relative to each other have three ICs that:",
            "options": ["Form a triangle", "Are at infinity", "Lie on a straight line", "Are perpendicular"],
            "answer": 2
        },
        {
            "q": "In a 4-bar linkage, which of these is considered a 'Moving' Instant Center?",
            "options": ["I1,2", "I2,3", "I1,3", "I1,4"],
            "answer": 2
        },
        {
            "q": "What is the first step in the graphical method for locating hidden Instant Centers?",
            "options": ["Draw a velocity vector", "Draw an IC circle", "Measure link lengths", "Fix the slider"],
            "answer": 1
        },
        {
            "q": "For a 6-link mechanism, how many Instant Centers must be located?",
            "options": ["6", "10", "15", "20"],
            "answer": 2
        },
        {
            "q": "According to Kennedy's Rule, ICs I1,2, I2,3, and I1,3 must be:",
            "options": ["Perpendicular", "Collinear", "At the same point", "Equidistant"],
            "answer": 1
        },
        {
            "q": "If two links are connected by a sliding joint, their IC is located at:",
            "options": ["The center of the slider", "Infinity", "The ground pivot", "The coupler"],
            "answer": 1
        },
        {
            "q": "Permanent instant centers are usually found by:",
            "options": ["Calculation", "Inspection of pin joints", "Kennedy's Rule", "The IC circle"],
            "answer": 1
        },
        {
            "q": "The IC circle diagram uses solid lines to represent:",
            "options": ["Hidden ICs", "Unknown velocities", "ICs already found", "The ground link"],
            "answer": 2
        },
        {
            "q": "To find a moving IC like I1,3, you look for the intersection of lines from which two pairs?",
            "options": ["(I1,2, I2,3) and (I1,4, I4,3)", "(I1,2, I1,4) and (I2,3, I3,4)", "(I1,1, I2,2) and (I3,3, I4,4)", "None of the above"],
            "answer": 0
        },
        {
            "q": "What happens to the location of a 'Moving' IC as the mechanism changes position?",
            "options": ["It stays fixed", "It disappears", "It varies with the configuration", "It moves to the origin"],
            "answer": 2
        },
        {
            "q": "Which of these is a 'Fixed' IC in a standard 4-bar linkage?",
            "options": ["I2,3", "I3,4", "I1,4", "I2,4"],
            "answer": 2
        },
        {
            "q": "The absolute instantaneous velocity of an IC is:",
            "options": ["Zero", "Maximum", "The same for both bodies", "Different for each link"],
            "answer": 2
        },
        {
            "q": "Kennedy's Rule is also known as the:",
            "options": ["Four-Center Theorem", "Three-Center-on-Line Theorem", "Grashof Theorem", "Kutzbach Criterion"],
            "answer": 1
        }
    ]
};

// 1. GLOBAL VARIABLES (Must be at the top)
let shuffledQuestions = []; 
let currentScore = 0;
let currentQuestionIndex = 0;
let currentModuleKey = "";

// 2. START THE QUIZ
function startModule(moduleKey) {
    currentModuleKey = moduleKey;
    currentQuestionIndex = 0;
    currentScore = 0;

    // 1. Create a COPY of the questions so we don't ruin the original list
    shuffledQuestions = [...allModules[moduleKey]];

    // 2. Shuffle the copy
    shuffleArray(shuffledQuestions);

    // 3. UI Resets
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('question').style.display = 'block';
    document.getElementById('choices').style.display = 'block';
    document.getElementById('home-btn').style.display = 'block';
    document.getElementById('completion-screen').style.display = 'none';
    
    // Reset Progress Bar
    document.getElementById('progress-container').style.display = 'block';
    document.getElementById('progress-bar').style.width = '0%';

    loadQuestion();
}
// 3. LOAD THE QUESTION
function loadQuestion() {
    // 1. Get the data for the current shuffled question
    const qData = shuffledQuestions[currentQuestionIndex];
    const total = shuffledQuestions.length;

    // 2. Safety check: If no data, stop here
    if (!qData) return;

    // 3. PROGRESS BAR LOGIC
    const progressPercent = ((currentQuestionIndex + 1) / total) * 100;
    document.getElementById('progress-bar').style.width = progressPercent + "%";

    // 4. Update the question text
    document.getElementById('question').innerText = qData.q;

    // 5. Clear and build buttons
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = "";

    qData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('choice-btn'); 
        button.onclick = () => checkAnswer(index);
        choicesContainer.appendChild(button);
    });

    // 6. Reset the feedback text
    document.getElementById('result').innerText = "";
}
// 4. CHECK THE ANSWER
 function checkAnswer(choiceIndex) {
    // 1. Point to the SHUFFLED list, not the old module list
    const qData = shuffledQuestions[currentQuestionIndex]; 
    const buttons = document.querySelectorAll('.choice-btn');
    const resultDisplay = document.getElementById('result');
    const correctIndex = qData.answer;

    // 2. Disable all buttons immediately (prevents double-clicking)
    buttons.forEach(btn => btn.disabled = true);

    // 3. Logic for Right vs Wrong
    if (choiceIndex === correctIndex) {
        buttons[choiceIndex].classList.add('correct');
        resultDisplay.innerText = "✅ Correct, Engineer!";
        resultDisplay.style.color = "#27ae60";
        currentScore++;
    } else {
        buttons[choiceIndex].classList.add('wrong');
        buttons[correctIndex].classList.add('correct'); // Show them the right one
        resultDisplay.innerText = "❌ Wrong Answer.";
        resultDisplay.style.color = "#e74c3c";
    }

    // 4. The "Proceed" Logic (The part that was stuck)
    setTimeout(() => {
        // Use shuffledQuestions.length to check if we are at the end
        if (currentQuestionIndex >= shuffledQuestions.length - 1) {
            showResult();
        } else {
            currentQuestionIndex++; // Move to next index
            loadQuestion();        // Run the loader again
        }
    }, 1000); // 1.5 second delay so they can see the red/green
}
// 5. SHOW RESULTS
function showResult() {
    // 1. Hide the quiz elements
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('question').style.display = 'none';
    document.getElementById('choices').style.display = 'none';
    document.getElementById('home-btn').style.display = 'none';
    
    // 2. Show the completion screen
    const screen = document.getElementById('completion-screen');
    if (screen) {
        screen.style.display = 'block';
        
        // Use shuffledQuestions to get the correct count
        const totalQuestions = shuffledQuestions.length;
        
        // 3. Update the score text
        document.getElementById('final-stats').innerText = `You scored ${currentScore} out of ${totalQuestions}.`;
        
        // 4. Performance Feedback
        let percentage = (currentScore / totalQuestions) * 100;
        let feedback = "";

        if (percentage === 100) feedback = "Ready na ka mag board exam!";
        else if (percentage >= 75) feedback = "Great job! Ano jay?.";
        else if (percentage >= 50) feedback = "Not bad, review the PDF.";
        else feedback = "Keep practicing, Engineer!";
        
        document.getElementById('feedback-text').innerText = feedback;
    }
}

// 6. BACK TO MENU
function returnToMenu() {
    document.getElementById('menu-container').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    
    // Safety Reset
    currentScore = 0;
    currentQuestionIndex = 0;
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}