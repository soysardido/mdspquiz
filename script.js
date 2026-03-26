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
            "options": ["Yes (2+10 < 6+7)", "No (2+10 > 6+7)", "Yes (2+10 = 12)", "No (2+10 = 6+7)"],
            "answer": 0
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
    ],
    "handToolsQuiz": [
        {
            q: "What is the standard height for mounting a machinist's bench vise?",
            options: ["Waist height", "Elbow height", "Shoulder height", "Knee height"],
            answer: 1
        },
        {
            q: "Which type of vise base allows the tool to be rotated 360 degrees?",
            options: ["Solid base", "Fixed base", "Swivel base", "Magnetic base"],
            answer: 2
        },
        {
            q: "The size of a machinist's bench vise is determined by:",
            options: ["The weight", "The jaw width", "The handle length", "The screw diameter"],
            answer: 1
        },
        {
            q: "What is the most common weight range for a machinist's ball-peen hammer?",
            options: ["2 oz to 8 oz", "4 oz to 3 lbs", "1 lb to 5 lbs", "10 lbs to 20 lbs"],
            answer: 1
        },
        {
            q: "Which hammer is used to avoid 'mushrooming' or damaging delicate machine parts?",
            options: ["Sledge hammer", "Ball-peen hammer", "Soft-faced hammer", "Claw hammer"],
            answer: 2
        },
        {
            q: "What is the risk of using a wrench with jaws that are too large for the nut?",
            options: ["The nut will get too hot", "The jaws will spread and round the corners of the nut", "The handle will snap", "The threads will strip"],
            answer: 1
        },
        {
            q: "Which wrench provides a 'ratcheting' action without being removed from the nut?",
            options: ["Box-end wrench", "Open-end wrench", "Socket wrench", "Pipe wrench"],
            answer: 2
        },
        {
            q: "A Stillson wrench is another name for a:",
            options: ["Monkey wrench", "Pipe wrench", "Torque wrench", "Allen wrench"],
            answer: 1
        },
        {
            q: "Which screwdriver has a cross-shaped tip and is used to prevent over-tightening?",
            options: ["Standard (Slotted)", "Phillips", "Torx", "Robertson"],
            answer: 1
        },
        {
            q: "What is the result of using a screwdriver that is too small for the screw slot?",
            options: ["The screw breaks", "The slot becomes 'chewed' or burred", "The screwdriver becomes magnetized", "Nothing happens"],
            answer: 1
        },
        {
            q: "Which pliers have a 'slip-joint' to allow the jaws to open wider for different sizes?",
            options: ["Diagonal pliers", "Needle-nose pliers", "Combination/Slip-joint pliers", "Side-cutting pliers"],
            answer: 2
        },
        {
            q: "Which chisel is used to cut keyways and square corners?",
            options: ["Flat Chisel", "Cape Chisel", "Round-nose Chisel", "Diamond-point Chisel"],
            answer: 1
        },
        {
            q: "What is the recommended cutting angle for a chisel used on cast iron?",
            options: ["40 degrees", "60 degrees", "80 degrees", "90 degrees"],
            answer: 1
        },
        {
            q: "A hacksaw blade with 32 teeth per inch (TPI) is best for:",
            options: ["Soft metals", "Thick tool steel", "Thin tubing and sheet metal", "Large aluminum blocks"],
            answer: 2
        },
        {
            q: "On which stroke should a hacksaw perform its cutting action?",
            options: ["The pull stroke", "The push stroke", "Both strokes", "Neither stroke"],
            answer: 1
        },
        {
            q: "What is the term for a file that has only one set of parallel diagonal teeth?",
            options: ["Single-cut", "Double-cut", "Rasp-cut", "Curved-tooth"],
            answer: 0
        },
        {
            q: "Why should you never use a file without a handle?",
            options: ["It will break the file", "The sharp tang can pierce your hand", "The file will get too hot", "The finish will be poor"],
            answer: 1
        },
        {
            q: "Which filing technique is used to produce a very smooth, flat finish?",
            options: ["Cross filing", "Draw filing", "Round filing", "Angular filing"],
            answer: 1
        },
        {
            q: "Which tap is the first one used when starting a thread by hand?",
            options: ["Plug Tap", "Taper Tap", "Bottoming Tap", "Master Tap"],
            answer: 1
        },
        {
            q: "What is the purpose of the 'flutes' on a tap or reamer?",
            options: ["To make the tool lighter", "To provide a path for chips and lubricant", "To sharpen the tool", "To measure the depth"],
            answer: 1
        },
        {
            q: "External threads are cut using a tool called a:",
            options: ["Tap", "Reamer", "Die", "Chisel"],
            answer: 2
        },
        {
            q: "A reamer is used to:",
            options: ["Drill a new hole", "Make a hole perfectly round and accurately sized", "Thread a hole", "Measure a hole"],
            answer: 1
        },
        {
            q: "In what direction should a reamer always be turned?",
            options: ["Counter-clockwise", "Clockwise", "Back and forth", "It doesn't matter"],
            answer: 1
        },
        {
            q: "Which tool is used to remove high spots from a metal surface to make it perfectly flat?",
            options: ["File", "Chisel", "Scraper", "Hacksaw"],
            answer: 2
        },
        {
            q: "Which abrasive cloth is commonly used for polishing metal parts?",
            options: ["Sandpaper", "Emery cloth", "Glass paper", "Flint paper"],
            answer: 1
        },
        {
            q: "What should be applied to tools before long-term storage to prevent rust?",
            options: ["Water", "Thin coating of oil", "Paint", "Sand"],
            answer: 1
        },
        {
            q: "Mushroomed heads on chisels should be:",
            options: ["Left alone", "Ground off to prevent flying chips", "Hammered flat", "Painted"],
            answer: 1
        },
        {
            q: "What is the danger of using a hammer with a loose handle?",
            options: ["The head may fly off and cause injury", "The handle will vibrate", "The hammer becomes heavier", "The finish will be dull"],
            answer: 0
        },
        {
            q: "When using a hacksaw, approximately how many strokes per minute should be used?",
            options: ["10-20", "40-60", "100-120", "200+"],
            answer: 1
        },
        {
            q: "Which tool is used to clean metal chips (pinning) from a file?",
            options: ["Wire brush/File card", "Screwdriver", "Hacksaw blade", "Magnet"],
            answer: 0
        }
    ],
    "layoutTools": [
        {
            q: "What is the primary purpose of 'Laying Out' in machine shop work?",
            options: ["To measure final dimensions", "To indicate shape and material to be removed", "To polish the surface", "To calculate raw weight"],
            answer: 1
        },
        {
            q: "All layouts must be made from a baseline or finished surface known as a:",
            options: ["Centerline", "Margin", "Datum", "Offset"],
            answer: 2
        },
        {
            q: "Which layout tool features a hardened steel point and is used to draw straight lines?",
            options: ["Prick Punch", "Scriber", "Divider", "Trammel"],
            answer: 1
        },
        {
            q: "Which tool is used for drawing circles, arcs, and stepping off equal distances?",
            options: ["Dividers", "Hermaphrodite Calipers", "T-Square", "Surface Gauge"],
            answer: 0
        },
        {
            q: "A 'Trammel' is used instead of a standard divider when:",
            options: ["High precision is required", "The distance is too large for regular dividers", "The material is soft", "Marking on curved surfaces"],
            answer: 1
        },
        {
            q: "Which caliper has one curved leg and one straight leg with a scriber point?",
            options: ["Outside Caliper", "Inside Caliper", "Hermaphrodite Caliper", "Vernier Caliper"],
            answer: 2
        },
        {
            q: "The Hermaphrodite Caliper is primarily used for:",
            options: ["Measuring hole diameters", "Scribing lines parallel to an edge", "Checking flatness", "Transferring measurements"],
            answer: 1
        },
        {
            q: "What is the main difference between a 'Prick Punch' and a 'Center Punch'?",
            options: ["Prick punch is larger", "Prick punch (30° point) vs Center punch (90° point)", "Center punch marks lines", "Prick punch is for wood"],
            answer: 1
        },
        {
            q: "Which tool provides a true flat reference plane for layout work?",
            options: ["Angle Plate", "Surface Plate", "V-Block", "Parallels"],
            answer: 1
        },
        {
            q: "What material is commonly used for modern surface plates due to stability?",
            options: ["Cast Iron", "High Carbon Steel", "Granite", "Aluminum Alloy"],
            answer: 2
        },
        {
            q: "Which tool is used to hold round work securely for layout or drilling?",
            options: ["Angle Plate", "V-Block", "Parallel Bar", "C-Clamp"],
            answer: 1
        },
        {
            q: "What is the purpose of using 'Layout Dye' or 'Bluing'?",
            options: ["Rust prevention", "To make scribed lines stand out clearly", "Lubrication", "Hardening"],
            answer: 1
        },
        {
            q: "A 'Surface Gauge' is used with a Surface Plate to:",
            options: ["Measure thickness", "Scribe lines at a height parallel to the plate", "Check weight", "Cut sheet metal"],
            answer: 1
        },
        {
            q: "Which device holds work in a vertical position during layout?",
            options: ["V-Block", "Angle Plate", "C-Clamp", "Parallel Bar"],
            answer: 1
        },
        {
            q: "Which grade of Surface Plate is the most accurate (Laboratory Grade)?",
            options: ["Grade A", "Grade AA", "Grade B", "Grade C"],
            answer: 1
        },
        {
            q: "Why is Granite preferred over Cast Iron for surface plates?",
            options: ["It is lighter", "It does not rust or burr if scratched", "It is magnetic", "It is flexible"],
            answer: 1
        },
        {
            q: "What is the recommended method for sharpening a scriber point?",
            options: ["Coarse grinding wheel", "Honing on an oilstone while rotating", "Bastard file", "Heat and quench"],
            answer: 1
        },
        {
            q: "What is the purpose of 'Witness Marks' (Pop Marks) along a layout line?",
            options: ["Decoration", "Permanent reference if lines rub off", "Increase saw speed", "Indicate lubrication"],
            answer: 1
        },
        {
            q: "Which type of hacksaw blade 'Set' has teeth that follow a wavy path?",
            options: ["Alternate Set", "Raker Set", "Wave Set", "Straight Set"],
            answer: 2
        },
        {
            q: "What happens if a coarse-pitch blade (14 TPI) is used on thin sheet metal?",
            options: ["Faster cut", "Teeth will straddle and strip off", "Blade stays cooler", "Smoother finish"],
            answer: 1
        },
        {
            q: "What is 'Chalking' a file used for?",
            options: ["Increasing friction", "Preventing 'pinning' or clogging of teeth", "Better visibility", "Sharpening"],
            answer: 1
        },
        {
            q: "The 'Tang' of a file is the part that:",
            options: ["Does the cutting", "Is inserted into the handle", "Has the brand name", "Cleans metal"],
            answer: 1
        },
        {
            q: "What is the 'Lead' on a Hand Reamer?",
            options: ["Material type", "Tapered section for entry and alignment", "Travel distance", "Handle attachment"],
            answer: 1
        },
        {
            q: "Why must you turn a tap backward periodically when threading?",
            options: ["To sharpen", "To break chips and clear flutes", "To cool metal", "To check depth"],
            answer: 1
        },
        {
            q: "Which pliers are designed with a side-cutter for wire only?",
            options: ["Slip-joint", "Diagonal cutting pliers", "Vice grips", "Water pump pliers"],
            answer: 1
        },
        {
            q: "How should files be stored to maintain efficiency?",
            options: ["In a pile", "Wrapped in oily cloth", "Separated in a rack", "In water"],
            answer: 2
        },
        {
            q: "What is the standard angle of a Center Punch point?",
            options: ["30°", "60°", "90°", "120°"],
            answer: 2
        },
        {
            q: "When using a hacksaw, what is the recommended strokes per minute?",
            options: ["10-20", "40-60", "100-120", "200+"],
            answer: 1
        },
        {
            q: "Which tool cleans 'pinning' (metal chips) from a file?",
            options: ["File card / Wire brush", "Screwdriver", "Hacksaw", "Magnet"],
            answer: 0
        }
    ],
    "measurementQuiz": [
    // --- MEASUREMENT SYSTEMS ---
    {
        q: "What are the two major systems of measurement used in the modern world?",
        options: ["Binary and Decimal", "Metric (SI) and English (Inch)", "Linear and Angular", "Fractional and Whole"],
        answer: 1
    },
    {
        q: "In the English system, what is the base for the fractional system used on rules?",
        options: ["Base 10", "Base 2 (Binary)", "Base 12", "Base 60"],
        answer: 1
    },
    {
        q: "Which system is most widely used by European and Asiatic countries?",
        options: ["English System", "Metric (SI) System", "Imperial System", "US Customary"],
        answer: 1
    },

    // --- RULES & SCALES ---
    {
        q: "What is the most common tool used for taking 'basic' or 'non-precision' linear measurements?",
        options: ["Micrometer", "Steel Rule", "Vernier Caliper", "Dial Indicator"],
        answer: 1
    },
    {
        q: "A 'Flexible Rule' is best suited for measuring:",
        options: ["Large flat surfaces", "Curved surfaces", "Deep internal holes", "Weight of parts"],
        answer: 1
    },
    {
        q: "Which rule is designed specifically for measuring the depths of holes, slots, and recesses?",
        options: ["Hook Rule", "Narrow Rule", "Depth Rule", "Short Rule"],
        answer: 2
    },
    {
        q: "What is the purpose of the 'Hook' on a Hook Rule?",
        options: ["To hang the tool on a belt", "To allow measurements from an internal wall or edge", "To scribe lines on steel", "To tighten bolts"],
        answer: 1
    },

    // --- CALIPERS (NON-PRECISION) ---
    {
        q: "Which caliper is used to measure the diameter of a cylinder or the thickness of a flat bar?",
        options: ["Inside Caliper", "Outside Caliper", "Hermaphrodite Caliper", "Slide Caliper"],
        answer: 1
    },
    {
        q: "Which caliper is used to measure hole diameters or the distance between two internal shoulders?",
        options: ["Inside Caliper", "Outside Caliper", "Trammels", "Spring Caliper"],
        answer: 0
    },
    {
        q: "How are measurements taken with a spring caliper usually read?",
        options: ["Directly from the caliper scale", "By transferring the setting to a steel rule", "Using a magnifying glass", "By counting the turns of the screw"],
        answer: 1
    },

    // --- THE COMBINATION SET ---
    {
        q: "How many distinct parts (heads) make up a standard Combination Set?",
        options: ["Two", "Three", "Four", "Five"],
        answer: 2
    },
    {
        q: "Which part of the Combination Set is used to find the center of a round workpiece?",
        options: ["Square Head", "Protractor Head", "Center Head", "Steel Rule"],
        answer: 2
    },
    {
        q: "The Square Head of a Combination Set can be used to layout lines at which two angles?",
        options: ["30° and 60°", "45° and 90°", "90° and 180°", "0° and 180°"],
        answer: 1
    },
    {
        q: "Which part of the Combination Set is used to measure or layout any angle from 0 to 180 degrees?",
        options: ["Square Head", "Protractor Head", "Center Head", "Spirit Level"],
        answer: 1
    },

    // --- SPECIALIZED GAUGES ---
    {
        q: "Which gauge consists of thin steel blades used to check the clearance between two mating parts?",
        options: ["Radius Gauge", "Screw Pitch Gauge", "Feeler (Thickness) Gauge", "Wire Gauge"],
        answer: 2
    },
    {
        q: "A 'Radius Gauge' is used to check:",
        options: ["The diameter of a hole", "Internal or external convex and concave curves", "The pitch of a thread", "The flatness of a surface"],
        answer: 1
    },
    {
        q: "How is the 'Pitch' of a metric thread defined?",
        options: ["Number of threads per inch", "The distance from the crest of one thread to the next", "The diameter of the screw", "The depth of the thread"],
        answer: 1
    },
    {
        q: "What tool is used to quickly determine the number of threads per inch on a bolt?",
        options: ["Screw Cutting Gauge", "Screw Pitch Gauge", "Center Gauge", "Micrometer"],
        answer: 1
    },
    {
        q: "The 'Center Gauge' (also called a Fish Tail Gauge) has a standard angle of:",
        options: ["30°", "45°", "60°", "90°"],
        answer: 2
    },
    {
        q: "A Center Gauge is primarily used to check the angle of:",
        options: ["Drill bits", "Lathe threading tools", "Chisel points", "Vise jaws"],
        answer: 1
    },

    // --- SQUARES ---
    {
        q: "Which square is considered a 'precision' square used to check for 90-degree accuracy?",
        options: ["Combination Square", "Beveled Edge Square", "Try Square", "L-Square"],
        answer: 1
    },

    // --- TECHNICAL DETAILS & MATH ---
    {
        q: "If a metric rule is divided into half-millimeters, what is the decimal equivalent of one division?",
        options: ["0.1 mm", "0.5 mm", "0.05 mm", "0.25 mm"],
        answer: 1
    },
    {
        q: "When measuring Imperial threads, 'TPI' stands for:",
        options: ["Taper Per Inch", "Threads Per Inch", "Total Part Increment", "Thread Pitch Index"],
        answer: 1
    },
    {
        q: "What is the formula to find TPI if you know the pitch (P) in millimeters?",
        options: ["TPI = P / 25.4", "TPI = 25.4 / P", "TPI = P * 10", "TPI = 25.4 - P"],
        answer: 1
    },
    {
        q: "What is the correct way to measure the pitch of a metric thread with a steel rule?",
        options: [
            "Measure the total length of the bolt", 
            "Count the number of crests in a specific length (e.g., 20mm) and divide the length by the count", 
            "Measure the diameter and multiply by 3.14", 
            "Count only the first three threads"
        ],
        answer: 1
    },

    // --- MAINTENANCE & SAFETY ---
    {
        q: "Why should you avoid using a steel rule as a screwdriver or scraper?",
        options: ["It will get too hot", "It will damage the graduations and ruin its accuracy", "It will magnetize the rule", "It is illegal in a machine shop"],
        answer: 1
    },
    {
        q: "What should be applied to precision measuring tools before storing them?",
        options: ["Water", "A light coating of oil", "Heavy grease", "Abrasive powder"],
        answer: 1
    },
    {
        q: "In measurement, what does 'Accuracy' refer to?",
        options: ["The cost of the tool", "The degree to which a measurement conforms to a standard", "How fast the measurement can be taken", "The weight of the instrument"],
        answer: 1
    },
    {
        q: "The 'Bezel' on a dial indicator is used to:",
        options: ["Lock the tool", "Rotate the dial to 'zero' the needle", "Measure depth", "Sharpen the point"],
        answer: 1
    },
    {
        q: "Which gauge is specifically used for measuring the diameter of wire or the thickness of sheet metal?",
        options: ["Radius Gauge", "Thickness Gauge", "Standard Wire Gauge", "Screw Pitch Gauge"],
        answer: 2
    }
],
"safetyQuiz": [
    // --- GENERAL SAFETY & DRESS CODE ---
    {
        q: "What is the primary cause of most industrial accidents?",
        options: ["Machine failure", "Carelessness", "Lack of electricity", "Poor lighting"],
        answer: 1
    },
    {
        q: "Which piece of safety equipment is mandatory to prevent the loss of eyesight?",
        options: ["Gloves", "Safety glasses or face shields", "Earplugs", "Dust masks"],
        answer: 1
    },
    {
        q: "What is the rule regarding loose clothing and jewelry in the shop?",
        options: ["They are allowed if tucked in", "They must be removed as they can get caught in moving parts", "They are only dangerous on wood lathes", "They should be covered with tape"],
        answer: 1
    },
    {
        q: "How should long hair be managed in a machine shop environment?",
        options: ["Left as is", "Tied back or covered with a protective cap", "Combed frequently", "Styled with gel"],
        answer: 1
    },
    {
        q: "Why is it dangerous to wear gloves while operating rotating machinery?",
        options: ["They make your hands too hot", "They can be pulled into the machine, dragging your hand with them", "They reduce your grip strength", "They are too expensive to ruin"],
        answer: 1
    },

    // --- HOUSEKEEPING & FIRE SAFETY ---
    {
        q: "What should be done immediately if oil or grease is spilled on the floor?",
        options: ["Wait for the janitor", "Cover it with a rug", "Wipe it up immediately to prevent slips", "Leave it to dry"],
        answer: 2
    },
    {
        q: "How should oily rags and combustible waste be stored?",
        options: ["In an open cardboard box", "In a closed metal container", "Under the workbench", "Near the welding station"],
        answer: 1
    },
    {
        q: "What is the rule regarding 'Horseplay' in the machine shop?",
        options: ["Allowed during break time", "Strictly forbidden at all times", "Only allowed near the exit", "Only allowed if no machines are running"],
        answer: 1
    },

    // --- HAND TOOLS & LIFTING ---
    {
        q: "When lifting heavy objects, where should the strain be placed?",
        options: ["On your back muscles", "On your arms", "On your legs by bending your knees", "On your shoulders"],
        answer: 2
    },
    {
        q: "What is a common safety hazard when using a file without a handle?",
        options: ["The file will break", "The sharp tang can be driven into your hand or wrist", "The file will get dull faster", "It will cause sparks"],
        answer: 1
    },
    {
        q: "Why should you never use a wrench as a hammer?",
        options: ["It is too heavy", "It can damage the wrench and cause it to slip during its proper use", "It makes too much noise", "It is bad luck"],
        answer: 1
    },

    // --- MACHINE SPECIFIC: LATHES ---
    {
        q: "When should the chuck key be removed from the lathe chuck?",
        options: ["After the machine starts", "Immediately after use; never leave it in the chuck", "Only when changing workpieces", "Once a day"],
        answer: 1
    },
    {
        q: "What should you do before starting a lathe to ensure the workpiece won't hit anything?",
        options: ["Turn the chuck by hand for one full revolution", "Start at maximum speed", "Use a ruler to check", "Ask a classmate"],
        answer: 0
    },
    {
        q: "How should chips (swarf) be removed from a machine?",
        options: ["Using your bare hands", "Using a brush or a piece of wood", "Blowing them with high-pressure air", "Using a magnet while running"],
        answer: 1
    },

    // --- MACHINE SPECIFIC: DRILL PRESSES ---
    {
        q: "What is the safest way to hold a workpiece on a drill press?",
        options: ["Holding it firmly with your hand", "Using a vise or clamps", "Taping it to the table", "Letting it spin against a stop"],
        answer: 1
    },
    {
        q: "What happens if a drill bit 'snags' in a workpiece that is held by hand?",
        options: ["The drill will stop", "The workpiece will spin and cause serious injury to the hands", "The bit will sharpen itself", "The motor will burn out"],
        answer: 1
    },

    // --- MACHINE SPECIFIC: GRINDERS ---
    {
        q: "What is the maximum allowable gap between the grinding wheel and the tool rest?",
        options: ["1 mm (1/32 inch)", "1.5 mm (1/16 inch)", "3 mm (1/8 inch)", "6 mm (1/4 inch)"],
        answer: 1
    },
    {
        q: "What is the 'Ring Test' used for in a machine shop?",
        options: ["Checking the size of a bolt", "Checking a grinding wheel for hidden cracks", "Testing the hardness of steel", "Measuring the diameter of a pipe"],
        answer: 1
    },
    {
        q: "Why should you never grind on the side of a standard grinding wheel?",
        options: ["It wastes material", "It can weaken the wheel and cause it to shatter", "It is too slow", "It makes the wheel too smooth"],
        answer: 1
    },

    // --- MILLING & PLANING ---
    {
        q: "When operating a milling machine, your hands should stay at least how far from the revolving cutter?",
        options: ["2 inches", "6 inches", "12 inches", "As close as needed"],
        answer: 1
    },
    {
        q: "On a planer or shaper, when is it safe to adjust the stroke or position of the ram?",
        options: ["While the machine is taking a cut", "Only when the machine is stopped", "While it is moving backward", "Anytime"],
        answer: 1
    },
    {
        q: "What safety device should be provided to protect others from flying chips near a planer?",
        options: ["A fan", "Screens", "A warning sign", "A curtain"],
        answer: 1
    },

    // --- EMERGENCY & FIRST AID ---
    {
        q: "If an accident occurs, when should it be reported to the instructor?",
        options: ["At the end of the week", "Only if it is life-threatening", "Immediately, no matter how small", "After you finish your project"],
        answer: 2
    },
    {
        q: "What should you do if you see another student working unsafely?",
        options: ["Ignore it", "Tell the instructor or politely warn the student", "Laugh at them", "Record it for later"],
        answer: 1
    },
    {
        q: "Before performing maintenance or adjustments on a machine, what must be done?",
        options: ["Turn off the light", "Disconnect or lock out the power source", "Clean the floor", "Put on an apron"],
        answer: 1
    },

    // --- TECHNICAL & PPE RECAP ---
    {
        q: "Which type of shoes should be worn in a machine shop?",
        options: ["Sandals", "Canvas sneakers", "Sturdy, closed-toe safety shoes", "Running shoes"],
        answer: 2
    },
    {
        q: "Using compressed air to blow dust off your clothes is dangerous because:",
        options: ["It wastes air", "It can drive particles into your skin or eyes", "It makes a loud noise", "It shrinks the fabric"],
        answer: 1
    },
    {
        q: "What is the correct stance when pulling on a long wrench to prevent falling if it slips?",
        options: ["Feet close together", "Leaning forward", "Solid, balanced stance", "One foot on the machine"],
        answer: 2
    },
    {
        q: "Small cuts and scratches should be treated to prevent:",
        options: ["Dizziness", "Infection", "Muscle cramps", "Fainting"],
        answer: 1
    },
    {
        q: "When working near a grinding wheel, why is a 'clear' shield better than goggles alone?",
        options: ["It is cheaper", "It protects the entire face from sparks and fragments", "It is easier to clean", "It doesn't fog up"],
        answer: 1
    },
    {
        q: "A machine guard is designed to:",
        options: ["Keep the machine clean", "Protect the operator from moving parts", "Slow down the machine", "Hold the tools"],
        answer: 1
    },
    {
        q: "In case of a fire, the first thing you should do is:",
        options: ["Run for the exit", "Alert others and follow the shop's fire protocol", "Try to save your project", "Call your parents"],
        answer: 1
    },
    {
        q: "What does 'Swarf' refer to in a machine shop?",
        options: ["The brand of a machine", "Metal chips or shavings produced by cutting", "A type of lubricant", "The shop foreman"],
        answer: 1
    },
    {
        q: "If you are unsure how to operate a machine safely, you should:",
        options: ["Guess", "Ask a friend", "Consult the instructor", "Read the label and try it"],
        answer: 2
    },
    {
        q: "The best way to develop safe work habits is to:",
        options: ["Read the book once", "Think safe, work safe, and be safe every day", "Watch others", "Wait for an accident to happen"],
        answer: 1
    }
],
"drillingQuiz": [
    // --- MACHINE TYPES & PARTS ---
    {
        q: "Which type of drill press allows the operator to 'feel' the cutting action through a hand-feed lever?",
        options: ["Radial Drill Press", "Sensitive Drill Press", "Gang Drilling Machine", "Multiple Spindle Machine"],
        answer: 1
    },
    {
        q: "The 'Radial Drill Press' is primarily used for:",
        options: ["Very small, delicate holes", "Large, heavy workpieces that are difficult to move", "Mass production of identical parts", "Woodworking only"],
        answer: 1
    },
    {
        q: "Which part of the drill press supports the column and rests on the floor?",
        options: ["Table", "Base", "Head", "Spindle"],
        answer: 1
    },
    {
        q: "What is the purpose of the 'Spindle' on a drilling machine?",
        options: ["To hold the coolant", "To hold and rotate the cutting tool", "To adjust the table height", "To provide lighting"],
        answer: 1
    },

    // --- TWIST DRILL ANATOMY ---
    {
        q: "What are the three main parts of a twist drill?",
        options: ["Point, Body, and Shank", "Tip, Flute, and Handle", "Head, Neck, and Base", "Cutter, Shaft, and Grip"],
        answer: 0
    },
    {
        q: "The 'Shank' of a drill is the part that:",
        options: ["Does the actual cutting", "Fits into the chuck or spindle", "Removes chips from the hole", "Provides the cooling"],
        answer: 1
    },
    {
        q: "What is the purpose of the 'Flutes' on a twist drill?",
        options: ["To make the drill lighter", "To form cutting edges and allow chips to escape", "To increase the drill's diameter", "To provide a grip for the chuck"],
        answer: 1
    },
    {
        q: "The 'Margin' of a twist drill is the narrow strip that:",
        options: ["Cuts the bottom of the hole", "Extends the full length of the flutes to keep the drill on size", "Connects the shank to the body", "Determines the RPM"],
        answer: 1
    },
    {
        q: "What is the standard point angle of a general-purpose twist drill?",
        options: ["60°", "90°", "118°", "135°"],
        answer: 2
    },
    {
        q: "For drilling hard materials, the drill point angle should be:",
        options: ["Sharper (90°)", "Flatter (135° to 150°)", "Standard (118°)", "Smaller (60°)"],
        answer: 1
    },

    // --- DRILLING OPERATIONS ---
    {
        q: "What operation is used to enlarge a hole to a very accurate size and smooth finish?",
        options: ["Tapping", "Countersinking", "Reaming", "Spot Facing"],
        answer: 2
    },
    {
        q: "The process of cutting internal threads in a hole is called:",
        options: ["Threading", "Tapping", "Boring", "Broaching"],
        answer: 1
    },
    {
        q: "Which operation produces a cone-shaped enlargement at the top of a hole for flat-head screws?",
        options: ["Counterboring", "Countersinking", "Spot Facing", "Center Drilling"],
        answer: 1
    },
    {
        q: "What is 'Counterboring' used for?",
        options: ["To make a hole deeper", "To enlarge the end of a hole cylindrically for bolt heads", "To sharpen a drill bit", "To remove broken taps"],
        answer: 1
    },
    {
        q: "Which operation provides a smooth, flat surface around a hole for a nut or washer?",
        options: ["Reaming", "Spot Facing", "Boring", "Lapping"],
        answer: 1
    },

    // --- TOOL HOLDING & SPEEDS ---
    {
        q: "What device is used to hold straight-shank drills?",
        options: ["Drill Drift", "Drill Chuck", "Sleeve", "Socket"],
        answer: 1
    },
    {
        q: "A 'Drill Drift' is used for:",
        options: ["Tightening the chuck", "Removing tapered-shank tools from the spindle", "Measuring drill diameter", "Lubricating the bit"],
        answer: 1
    },
    {
        q: "In drilling, 'Cutting Speed' (CS) refers to:",
        options: ["The speed the drill moves downward", "The surface speed of the drill circumference in feet or meters per minute", "The total time to drill a hole", "The horsepower of the motor"],
        answer: 1
    },
    {
        q: "Which material requires a higher cutting speed: Aluminum or Tool Steel?",
        options: ["Aluminum", "Tool Steel", "Both are the same", "Tool Steel requires zero speed"],
        answer: 0
    },
    {
        q: "If a drill bit is burning at the corners, it is a sign that:",
        options: ["The speed is too slow", "The speed is too fast", "The feed is too heavy", "The drill is too long"],
        answer: 1
    },

    // --- CALCULATION FORMULAS ---
    {
        q: "What is the formula for calculating RPM in the English (inch) system?",
        options: ["RPM = (CS × 4) / D", "RPM = CS / (D × π)", "RPM = (D × 4) / CS", "RPM = CS + D"],
        answer: 0
    },
    {
        q: "What is the formula for calculating RPM in the Metric (millimeter) system?",
        options: ["RPM = (CS × 1000) / (D × 3.14)", "RPM = (CS × 3.14) / D", "RPM = D / CS", "RPM = CS × D"],
        answer: 0
    },
    {
        q: "In the formula for drilling time, 'Feed' is usually measured in:",
        options: ["RPM", "Inches or millimeters per revolution", "Meters per second", "Degrees"],
        answer: 1
    },
    {
        q: "To calculate total drilling distance for a 'through' hole, you must add the:",
        options: ["Shank length", "Drill point allowance (0.3 × D)", "Chuck height", "Table thickness"],
        answer: 1
    },

    // --- TROUBLESHOOTING & SAFETY ---
    {
        q: "What is the primary cause of a drill 'snapping' in the hole?",
        options: ["Too much coolant", "Too much feed (forcing the drill)", "The speed is too fast", "The drill is too shiny"],
        answer: 1
    },
    {
        q: "If the chips are long and ribbon-like when drilling soft steel, you should:",
        options: ["Apply more pressure", "Momentarily back off the feed to break the chips", "Speed up the machine", "Stop and use a file"],
        answer: 1
    },
    {
        q: "A 'Pilot Hole' is used when:",
        options: ["Drilling a very small hole", "Drilling a large hole to reduce pressure on the web", "The material is wood", "You have run out of coolant"],
        answer: 1
    },
    {
        q: "The 'Web' of a drill is the:",
        options: ["Outer edge", "Thin metal partition in the center of the drill", "The part that fits the handle", "The cooling channel"],
        answer: 1
    },
    {
        q: "What is 'Thinning the Web'?",
        options: ["Making the drill longer", "Grinding the center part of the drill to reduce thrust requirements", "Sharpening the shank", "Polishing the flutes"],
        answer: 1
    },
    {
        q: "When using a 'Sleeve' or 'Socket,' it is because:",
        options: ["The drill shank is the same size as the spindle", "The drill shank is smaller or larger than the spindle hole", "The drill is broken", "To prevent rust"],
        answer: 1
    },
    {
        q: "A 'Blind Hole' is a hole that:",
        options: ["Is not straight", "Does not go all the way through the material", "Is used for eyes", "Is drilled without looking"],
        answer: 1
    },
    {
        q: "The included angle for a 'Center Drill' is usually:",
        options: ["30°", "60°", "90°", "118°"],
        answer: 1
    },
    {
        q: "Which tool is used to enlarge the top of a hole for a socket head cap screw?",
        options: ["Counterbore", "Countersink", "Reamer", "Tap"],
        answer: 0
    },
    {
        q: "If a hole is being drilled 'off-center,' what can be used to pull it back before it reaches full diameter?",
        options: ["A hammer", "A chisel or center punch", "A larger drill", "More coolant"],
        answer: 1
    },
    {
        q: "What is the 'Lip Clearance' on a twist drill?",
        options: ["The length of the shank", "The relief ground behind the cutting edges", "The depth of the flutes", "The thickness of the margin"],
        answer: 1
    },
    {
        q: "Standard lip clearance for a general-purpose drill is usually:",
        options: ["2° to 5°", "8° to 12°", "20° to 30°", "45°"],
        answer: 1
    },
    {
        q: "Which drilling machine part is moved to adjust the distance between the drill and the work?",
        options: ["Base", "Table", "Column", "Switch"],
        answer: 1
    },
    {
        q: "Tapered-shank drills follow which standard taper?",
        options: ["Morse Taper", "Brown & Sharpe Taper", "Jarno Taper", "Metric Taper"],
        answer: 0
    },
    {
        q: "What is the 'Dead Center' of a drill?",
        options: ["The shank end", "The sharp edge at the extreme tip where the flutes meet", "The motor", "The table center"],
        answer: 1
    },
    {
        q: "High Speed Steel (HSS) drills are preferred over Carbon Steel drills because:",
        options: ["They are cheaper", "They can maintain hardness at higher temperatures", "They are softer", "They are lighter"],
        answer: 1
    }
],
"latheQuiz": [
    // --- TYPES & SIZES ---
    {
        q: "The lathe is historically considered the:",
        options: ["Newest machine tool", "Forerunner of all machine tools", "Least accurate machine", "Secondary machine"],
        answer: 1
    },
    {
        q: "Which type of lathe is primarily used for manufacturing many identical parts without requiring high skill to operate once set up?",
        options: ["Bench Lathe", "Engine Lathe", "Turret Lathe", "Wood Lathe"],
        answer: 2
    },
    {
        q: "How is the 'Size' of a lathe designated?",
        options: ["By the total height of the machine", "By the swing (largest diameter) and the maximum distance between centers", "By the horsepower of the motor", "By the weight of the tailstock"],
        answer: 1
    },

    // --- MAIN COMPONENTS ---
    {
        q: "Which part of the lathe contains the spindle and the driving mechanism?",
        options: ["Tailstock", "Carriage", "Headstock", "Bed"],
        answer: 2
    },
    {
        q: "The 'Bed' of the lathe features V-shaped or flat precision-finished paths called:",
        options: ["Tracks", "Ways", "Rails", "Guides"],
        answer: 1
    },
    {
        q: "Which assembly is used to support long workpieces and can hold tools like drills and reamers?",
        options: ["Headstock", "Tailstock", "Apron", "Compound Rest"],
        answer: 1
    },
    {
        q: "Which part of the carriage moves the cutting tool at right angles (perpendicular) to the lathe bed?",
        options: ["Saddle", "Cross-slide", "Compound Rest", "Apron"],
        answer: 1
    },
    {
        q: "The 'Compound Rest' is primarily used for:",
        options: ["General turning", "Adjusting tool height", "Cutting tapers and setting threading depths", "Holding the chuck"],
        answer: 2
    },
    {
        q: "Which part contains the gears and levers that transmit power from the feed rod to the carriage?",
        options: ["Saddle", "Apron", "Headstock", "Gearbox"],
        answer: 1
    },

    // --- WORK HOLDING ---
    {
        q: "A 3-jaw universal chuck is used for holding:",
        options: ["Irregularly shaped work", "Round and hexagonal work", "Only square work", "Long thin shafts"],
        answer: 1
    },
    {
        q: "Which chuck allows for independent movement of each jaw to center irregular work accurately?",
        options: ["3-Jaw Chuck", "4-Jaw Chuck", "Collet Chuck", "Magnetic Chuck"],
        answer: 1
    },
    {
        q: "A 'Collet' is used for holding:",
        options: ["Large heavy castings", "Small, smooth, and accurate round work", "Rough-surfaced bars", "Internal bores"],
        answer: 1
    },
    {
        q: "What is the purpose of a 'Lathe Dog'?",
        options: ["To bark at the operator", "To drive work being turned between centers", "To clean the ways", "To lock the tailstock"],
        answer: 1
    },

    // --- LATHE OPERATIONS ---
    {
        q: "The operation of machining the end of a workpiece flat and square is called:",
        options: ["Turning", "Facing", "Parting", "Knurling"],
        answer: 1
    },
    {
        q: "What is 'Parallel Turning'?",
        options: ["Reducing the diameter to a constant size along the length", "Cutting a taper", "Making the surface wavy", "Machining a shoulder"],
        answer: 0
    },
    {
        q: "Which operation produces a diamond-shaped pattern on the surface to provide a better grip?",
        options: ["Grooving", "Knurling", "Threading", "Forming"],
        answer: 1
    },
    {
        q: "What is the process of cutting off a piece of work from a bar called?",
        options: ["Slicing", "Parting (or Cutting-off)", "Sectioning", "Facing"],
        answer: 1
    },

    // --- TOOLING & GEOMETRY ---
    {
        q: "The angle ground on a toolbit to allow it to cut into the metal easily is the:",
        options: ["Clearance angle", "Rake angle", "Point angle", "Lead angle"],
        answer: 1
    },
    {
        q: "What happens if a tool is set 'below center' for an outside diameter cut?",
        options: ["It will cut too deep", "It will rub against the work and fail to cut", "It will vibrate excessively", "The finish will be perfect"],
        answer: 1
    },
    {
        q: "High Speed Steel (HSS) toolbits are widely used because:",
        options: ["They are the cheapest", "They retain their hardness at red heat", "They never need sharpening", "They are made of plastic"],
        answer: 1
    },

    // --- SPEEDS & FEEDS ---
    {
        q: "What is the standard formula for Lathe RPM (English system)?",
        options: ["RPM = (CS × 4) / D", "RPM = CS / D", "RPM = D / (CS × 4)", "RPM = CS + D"],
        answer: 0
    },
    {
        q: "Cutting speed (CS) for a lathe is measured in:",
        options: ["Inches per minute", "Feet per minute (sfpm)", "Degrees per second", "Horsepower"],
        answer: 1
    },
    {
        q: "A 'Roughing Cut' is characterized by:",
        options: ["High speed and light feed", "Heavy feed and deep depth of cut", "Low speed and zero feed", "Manual feeding only"],
        answer: 1
    },

    // --- THREADING ---
    {
        q: "Which dial is used to engage the split-nut at the correct time during threading?",
        options: ["Cross-feed dial", "Compound rest dial", "Thread-chasing dial", "Micrometer dial"],
        answer: 2
    },
    {
        q: "When cutting a 60° thread, the compound rest is usually set to what angle?",
        options: ["0°", "29° or 30°", "45°", "90°"],
        answer: 1
    },
    {
        q: "The lead screw on a lathe is used primarily for:",
        options: ["General turning", "Facing", "Threading", "High-speed drilling"],
        answer: 2
    },

    // --- SAFETY & MAINTENANCE ---
    {
        q: "Why must the chuck key be removed immediately after use?",
        options: ["It will get lost", "It can fly out and cause injury when the lathe is started", "It prevents rust", "It balances the chuck"],
        answer: 1
    },
    {
        q: "How should you adjust the toolbit height for facing?",
        options: ["Exactly at center height", "Slightly above center", "Slightly below center", "It doesn't matter"],
        answer: 0
    },
    {
        q: "What is 'Backlash' in lathe handles?",
        options: ["The speed of the motor", "The play or 'lost motion' between the screw and nut", "The sound of the gears", "The weight of the carriage"],
        answer: 1
    },

    // --- ADVANCED DETAILS ---
    {
        q: "Which type of center rotates with the work and is used in the tailstock for high speeds?",
        options: ["Dead Center", "Live Center", "Half Center", "Pipe Center"],
        answer: 1
    },
    {
        q: "What is the purpose of a 'Center Drill'?",
        options: ["To drill a hole for a bolt", "To provide a bearing surface for the lathe centers", "To sharpen the drill bit", "To clean the spindle"],
        answer: 1
    },
    {
        q: "The 'Swing' of a lathe refers to:",
        options: ["How far the carriage moves", "The maximum diameter of work that can rotate over the ways", "The speed of the motor", "The length of the bed"],
        answer: 1
    },
    {
        q: "Which operation creates a tapered hole or enlarges an existing hole using a single-point tool?",
        options: ["Drilling", "Boring", "Reaming", "Tapping"],
        answer: 1
    },
    {
        q: "The 'Split-nut' lever is engaged with the:",
        options: ["Feed Rod", "Lead Screw", "Spindle", "Tailstock"],
        answer: 1
    },
    {
        q: "What device is used to support long, thin work to prevent it from springing away from the tool?",
        options: ["Faceplate", "Steady Rest or Follower Rest", "Chuck", "V-block"],
        answer: 1
    },
    {
        q: "When 'Filing' on a lathe, you should:",
        options: ["Hold the file with both hands and file left-handed", "Use high speed and heavy pressure", "File right-handed near the chuck", "Never file on a lathe"],
        answer: 0
    },
    {
        q: "To produce a very smooth finish on a lathe, you should use:",
        options: ["High speed and fine feed", "Low speed and heavy feed", "High speed and heavy feed", "Coarse grit sandpaper"],
        answer: 0
    },
    {
        q: "The 'Lead' of a thread is:",
        options: ["The diameter of the screw", "The distance a nut moves along the screw in one revolution", "The depth of the thread", "The material of the bolt"],
        answer: 1
    },
    {
        q: "Which lathe part moves the carriage automatically via the feed rod?",
        options: ["Half-nut", "Feed lever/clutch", "Tailstock handle", "Handwheel"],
        answer: 1
    },
    {
        q: "A 'Mandrel' is used for:",
        options: ["Holding solid bars", "Holding workpieces with a hole so the outer surface can be machined", "Measuring depth", "Sharpening tools"],
        answer: 1
    }
],
"machineShopPDF": [
    {
        q: "A correct cutting angle on a drill for ordinary work is:",
        options: ["45°", "59°", "64°", "70°"],
        answer: 1
    },
    {
        q: "When using a drill press, the work should be held with:",
        options: ["Glove hand", "The hand", "A vise and a clamp", "Pliers"],
        answer: 2
    },
    {
        q: "A machining operation whereby the tool reciprocates and the feed is stationary.",
        options: ["Reaming", "Shaping", "Planning", "Turning"],
        answer: 1
    },
    {
        q: "A machining operation whereby the tool rotates and the feed is stationary.",
        options: ["Shaping", "Milling", "Turning", "Reaming"],
        answer: 1
    },
    {
        q: "A machine used in shaping metal by means of abrasive wheel or removal of metals with abrasive.",
        options: ["Shaper", "Planer", "Grinder", "Power Saw"],
        answer: 2
    },
    {
        q: "To prevent leakage in dynamic seals, it is recommended to use:",
        options: ["Gaskets", "Seals", "Packings", "Felts"],
        answer: 2
    },
    {
        q: "The process of checking or producing checkers on the surface of a piece by rolling checkered depressions in the surface.",
        options: ["Indexing", "Soldering", "Knurling", "Quenching"],
        answer: 2
    },
    {
        q: "Tooth width measured along the chord at the pitch circle.",
        options: ["Chord space", "Chordal thickness", "Chord clearance", "Chord length"],
        answer: 1
    },
    {
        q: "For high speed application, the recommended maximum number of teeth in a small sprocket should be:",
        options: ["10 to 20", "16 to 32", "14 to 28", "18 to 24"],
        answer: 3
    },
    {
        q: "Cast iron flywheels are commonly designated with a factor of safety of:",
        options: ["8 to 10", "10 to 13", "5 to 6", "18 to 20"],
        answer: 1
    },
    {
        q: "An agency handling assistance to all foundry, machine shop and metallurgical plant operations.",
        options: ["DOST", "BOI", "MIRDC", "UNICEF"],
        answer: 2
    },
    {
        q: "A metal characteristic that absorbs extreme deformation without rupture is called:",
        options: ["Hardness", "Ductility", "Plasticity", "Toughness"],
        answer: 2
    },
    {
        q: "The size of all pipes from 1/16 inches to 12 inches is defined by _____ size.",
        options: ["Design", "External diameter", "Inside diameter", "Tubular"],
        answer: 2
    },
    {
        q: "Cutting lubricants used in drilling, reaming and lapping of cast iron parts.",
        options: ["Soda water", "Kerosene", "Soluble oil", "Dry"],
        answer: 3
    },
    {
        q: "The angle developed between tooth profile and radial line at its pitch point is referred as:",
        options: ["Approach angle", "Pressure angle", "Recess angle", "Base helix angle"],
        answer: 1
    },
    {
        q: "The purpose of annealing is to make a metal:",
        options: ["Harder", "Medium hard", "Softer", "Shiny"],
        answer: 2
    },
    {
        q: "AISI numbering for silicon steel.",
        options: ["85XX", "92XX", "93XX", "87XX"],
        answer: 1
    },
    {
        q: "Specific weight of steel in lbs/inches³:",
        options: ["0.832", "0.328", "0.283", "0.823"],
        answer: 2
    },
    {
        q: "Ratio of coil to wire diameter, a measure of coil curvature.",
        options: ["Spring rate", "Spring index", "Wahl's factor", "Spring scale"],
        answer: 1
    },
    {
        q: "When hole is smaller than the shaft requiring pressure to pull parts together, the negative allowance is termed as:",
        options: ["Negative fits", "Negative allowance", "Interference of metals", "Press fit"],
        answer: 2
    },
    {
        q: "A kind of thread that is generally used.",
        options: ["UNF", "UNEF", "UNC", "8-Thread series"],
        answer: 2
    },
    {
        q: "A machine tool used principally to machine flat or plane surfaces with a single point cutting tool.",
        options: ["Shaper", "Planer", "Milling", "Lathe"],
        answer: 0
    },
    {
        q: "The ratio of relative velocities of colliding bodies after impact to their velocity before impact.",
        options: ["Coefficient of friction", "Coefficient of velocity", "Coefficient of restitution", "Coefficient of fluctuation"],
        answer: 2
    },
    {
        q: "In machine shop forging, the operation of lengthening a piece of stock while reducing the cross sectional area is called:",
        options: ["Reducing", "Upsetting", "Upgrading", "Desizing"],
        answer: 1
    },
    {
        q: "It is the radial distance between the top of the tooth and the bottom of the mating tooth space.",
        options: ["Clearance", "Tolerance", "Lead", "Crest"],
        answer: 0
    },
    {
        q: "An arc of the pitch circle through which a tooth travels from the pitch point to the point where contact ceases.",
        options: ["Arc of action", "Arc of recess", "Arc of approach", "Backlash"],
        answer: 1
    },
    {
        q: "The distance a helical gear would thread along its axis in one revolution if free to move axially.",
        options: ["Crest", "Lead", "Module", "Clearance"],
        answer: 1
    },
    {
        q: "Ability of a material to absorb energy when deformed elastically and return it when unloaded is:",
        options: ["Toughness", "Creep", "Resilience", "Plasticity"],
        answer: 2
    },
    {
        q: "A weld made to hold parts of a weldment in proper alignment until final welds are made.",
        options: ["Fusion weld", "Tack weld", "Electric weld", "Oxy-acetylene weld"],
        answer: 1
    },
    {
        q: "A machine used for testing of very thin steel or surface layers.",
        options: ["Charpy test", "Izod test", "Description test", "Rockwell test"],
        answer: 3
    },
    {
        q: "A machine tool in which an abrasive wheel is used as a cutting tool to obtain a very smooth finish.",
        options: ["Broaching machine", "Planer", "Tool grinder", "Lathe machine"],
        answer: 2
    },
    {
        q: "A machine tool used to produce a variety of surfaces by using a circular type cutter with multiple teeth.",
        options: ["Lathe machine", "Milling machine", "Broaching machine", "Grinding machine"],
        answer: 1
    },
    {
        q: "A cutting tool used to finish internal and external surfaces by the use of a cutter called a broach with a series of cutting edges.",
        options: ["Lathe machine", "Broaching machine", "Planer", "Shaper"],
        answer: 1
    },
    {
        q: "A kind of chuck which should not be used where accuracy is required.",
        options: ["Collet chuck", "Magnetic chuck", "Four jaw chuck", "Universal chuck"],
        answer: 3
    },
    {
        q: "A tool when pressed into a finished hole in a piece of work, provides a center on which the piece may be turned or otherwise machined.",
        options: ["Mesh", "Butt", "Mandrel", "Wobble"],
        answer: 2
    },
    {
        q: "A machine tool which is very similar to a shaper except that the ram reciprocates vertically rather than horizontally.",
        options: ["Lathe", "Grinder", "Planer", "Slotter"],
        answer: 3
    },
    {
        q: "A cylindrical bar of steel with threads and grooves or flutes intersecting threads to form cutting edges. Used to cut internal threads.",
        options: ["Groove", "Lap", "Tap", "Flute"],
        answer: 2
    },
    {
        q: "The operation of making a cone-shaped enlargement of the end of a hole, as for a recess for a flat head screw.",
        options: ["Counter sinking", "Knurling", "Squaring", "Performing"],
        answer: 0
    },
    {
        q: "An operation of sizing and finishing a hole by means of a cutting tool having several cutting edges.",
        options: ["Notching", "Piercing", "Turning", "Reaming"],
        answer: 3
    },
    {
        q: "The shop term used to include the marking or inscribing of center points, circles, or straight lines upon a metal surface for the guidance of the worker.",
        options: ["Shaping", "Hobbing", "Laying out", "Planning"],
        answer: 2
    },
    {
        q: "It is used to true and align machine tools, fixtures, and works; to test and inspect size, trueness of finished work, and compare measurements.",
        options: ["Dial gage", "Dial indicator", "Tachometer", "Speedometer"],
        answer: 1
    },
    {
        q: "The process of forming metals by the use of dies after the metal is heated to its plastic range.",
        options: ["Rolling", "Forging", "Turning", "Casting"],
        answer: 0
    },
    {
        q: "A machine tool used to cut metals at light, medium and large sections using a reciprocating hacksaw blade.",
        options: ["Tool grinder", "Shaper", "Planer", "Power saw"],
        answer: 3
    },
    {
        q: "The usual value of helix angle of a drill is:",
        options: ["30°", "60°", "110°", "120°"],
        answer: 0
    },
    {
        q: "Wiping is the process of:",
        options: ["Applying flux during welding", "Cleaning welded surface after welding", "Connecting lead pipes by soldering alloy", "Low temperature welding"],
        answer: 2
    },
    {
        q: "In the Carthias process, cavity is filled with a precalculated quantity of metal and:",
        options: ["Molten metal is fed by gravity into metallic mould", "Mould is inverted after predetermined time", "A core or plunger is inserted to force metal into cavity", "Metal is forced into mould under high pressure"],
        answer: 2
    },
    {
        q: "What is the purpose of a riser?",
        options: ["Feed the casting at a rate consistent with solidification", "Act as a reservoir for molten metal", "Help feed the casting until solidification takes place", "Feed molten metal from pouring basin to gas"],
        answer: 2
    },
    {
        q: "The mould for casting ferrous materials is made from:",
        options: ["Copper", "High carbon steel", "Low carbon steel", "Medium carbon steel"],
        answer: 0
    },
    {
        q: "A plug gauge is used to measure:",
        options: ["Cylindrical bores", "Screw thread", "Spherical holes", "Taper bores"],
        answer: 0
    },
    {
        q: "When a large number of components are turned and parted off a bar, the chuck generally used is the:",
        options: ["Collet chuck", "Four jaw chuck", "Magnetic chuck", "Two jaw chuck"],
        answer: 2
    },
    {
        q: "Which of the following is the cutting speed of brass?",
        options: ["30 m/min", "40 m/min", "50 m/min", "60 m/min"],
        answer: 1
    },
    {
        q: "Quick return mechanism is used in a:",
        options: ["Drilling machine", "Grinder", "Lathe", "Shaper"],
        answer: 3
    },
    {
        q: "Mandrel is used to hold:",
        options: ["Cutting tool", "Drill bits", "Face plate", "Hollow work pieces"],
        answer: 3
    },
    {
        q: "In up cut milling, the work piece is fed:",
        options: ["Against the milling cutter", "At an angle of 60° at the center", "At right angle of the cutter", "In the direction of the cutter"],
        answer: 0
    },
    {
        q: "Sprue is a passage provided for the:",
        options: ["Out flow", "In flow", "Smooth flow", "Solidification of molten material"],
        answer: 1
    },
    {
        q: "Feed in the lathe machine is expressed in:",
        options: ["mm", "mm per degree", "mm per revolution", "rpm"],
        answer: 2
    },
    {
        q: "Rapping allowance is provided on a pattern to take care of:",
        options: ["Shrinkage", "Machining", "Distortion", "Easy withdrawal"],
        answer: 3
    },
    {
        q: "Chuck used in turret lathe is:",
        options: ["Collet chuck", "Four jaw self-centering chuck", "Magnetic chuck", "Three jaw chuck"],
        answer: 3
    },
    {
        q: "Cape in foundry practice refers to:",
        options: ["Bottom half of molding box", "Coating on the mold face", "Middle portion of the mold", "Top half of molding box"],
        answer: 3
    },
    {
        q: "A vent wire is used in:",
        options: ["Foundry", "Hot forging", "Cold forging", "Fitting"],
        answer: 1
    },
    {
        q: "Angle plate is used for:",
        options: ["Cutting tapers in a lathe", "Cutting gears in a shaper", "Cutting gears in milling", "Fixing job at angle in grinder"],
        answer: 1
    },
    {
        q: "Permeability in relation to molding sands is high for:",
        options: ["Coarse grain", "Fine grains", "Medium grains", "Round grains"],
        answer: 0
    },
    {
        q: "The purpose of tumbler gears in a lathe is to:",
        options: ["Cut gears", "Cut thread", "Give desired direction of movement to the lathe carriage", "Reduce spindle speed"],
        answer: 2
    },
    {
        q: "A sine bar cannot be used without a/an:",
        options: ["Angle gage", "Micrometer", "Slip gage", "Vernier caliper"],
        answer: 0
    },
    {
        q: "The operation of finishing a drilled hole to the correct size is known as:",
        options: ["Counter boring", "Counter sinking", "Reaming", "Spot facing"],
        answer: 2
    },
    {
        q: "When the outer corners of the cutting edges of a drill wear away too rapidly, it is an indication of:",
        options: ["Not enough speed", "Too much rake angle", "Too much high speed", "B or C"],
        answer: 3
    },
    {
        q: "Carbon steel should be operated at:",
        options: ["Speed greater than when using high speed drill", "Speed less than when using high speed drill", "Same speed as high speed steel", "None of the above"],
        answer: 1
    },
    {
        q: "Knurling is done to achieve:",
        options: ["Boring", "Chamfering", "Planning", "Turning"],
        answer: 1
    },
    {
        q: "When cutting material in a lathe, the harder the material, the tool bit should have:",
        options: ["Less side rake", "More side rake", "More top rake", "No side rake"],
        answer: 0
    },
    {
        q: "After grinding the tool bit, the cutting edge should be:",
        options: ["Case hardened", "Rubbed with emery cloth", "Rubbed with crocus cloth", "Stoned with oil stone"],
        answer: 3
    },
    {
        q: "When cutting soft material in a lathe, the tool bit should have:",
        options: ["Any of these", "Double top rake", "Less top rake", "More top rake"],
        answer: 2
    },
    {
        q: "A piece of cast iron held against an emery wheel will give off:",
        options: ["Bright shiny sparks", "Dull yellow sparks", "Red sparks", "No sparks"],
        answer: 1
    },
    {
        q: "The alignment of coupling faces can be checked by:",
        options: ["Inserting a feeler gage between coupling faces at various points around the circumference", "Inserting a thermometer", "Rotating and measuring to nearest permanent fitting", "Using an inside micrometer"],
        answer: 0
    },
    {
        q: "A drill bit has:",
        options: ["1 flute", "2 flutes", "3 flutes", "4 flutes"],
        answer: 1
    },
    {
        q: "When a lathe is put into back gear, it will go:",
        options: ["At a slower speed backwards", "At the same speed backward", "Faster", "Slower"],
        answer: 3
    },
    {
        q: "On a lathe, the dead center is used after:",
        options: ["Boring", "Center-drilling", "Drilling", "Reaming"],
        answer: 1
    },
    {
        q: "The best file to use when finishing sharp corners or lots of grooves is the:",
        options: ["Jewelry file", "Knife file", "Mill file", "Square file"],
        answer: 1
    },
    {
        q: "Never use a file:",
        options: ["That is dirty", "With a tang", "Without a handle", "Without oiling"],
        answer: 2
    },
    {
        q: "Which of the following information is necessary when ordering a file?",
        options: ["Size", "Shape", "Type of teeth", "All the above"],
        answer: 3
    },
    {
        q: "When filing a piece of metal in a lathe with short quick strokes, the finished piece will probably:",
        options: ["Be out of round", "Be perfect", "Have small flat areas on the surface", "A and C"],
        answer: 3
    },
    {
        q: "The best procedure when filing a piece of metal in a lathe is to take:",
        options: ["Long fast stroke", "Long slow stroke", "Short even stroke", "Short fast stroke"],
        answer: 1
    },
    {
        q: "Small pieces of metal clogged between the teeth on a file are called:",
        options: ["Bumps", "Clogs", "Flats", "Pins"],
        answer: 3
    },
    {
        q: "Finishing off a piece of metal with a real smooth finish can be done by:",
        options: ["Draw-filing", "Flat-filing", "Milling-filing", "Slide-filing"],
        answer: 0
    },
    {
        q: "For finishing a piece of work to size, the file to use is the:",
        options: ["Crossing file", "Double-cut fine-tooth file", "Mill file", "Single-cut fine-tooth file"],
        answer: 3
    },
    {
        q: "For filing lead or babbitt, use a:",
        options: ["Lead float file", "Mile file", "Vixen file", "A and C"],
        answer: 3
    },
    {
        q: "A hacksaw blade with 32 TPI is best suited for cutting:",
        options: ["Small tubing", "Conduit", "Sheet metal under 18 gage", "Any of the above"],
        answer: 3
    },
    {
        q: "A coolant is used when cutting material in a power hacksaw to:",
        options: ["Absorb heat of friction", "Prevent the blade from overheating", "Prevent the blade from losing temper", "All of the above"],
        answer: 3
    },
    {
        q: "A hacksaw blade with 10 teeth per inch is best suited for cutting:",
        options: ["Aluminum", "Cast iron", "Solid iron", "Any of the above"],
        answer: 3
    },
    {
        q: "When cutting a long thin piece of metal with a hacksaw, you should:",
        options: ["Set the blade with teeth facing toward you", "Turn the blade at right angles to the frame", "Turn the blade upside down in the frame", "Use a blade with fewer teeth per inch"],
        answer: 1
    },
    {
        q: "The hacksaw blade should be placed in the frame with:",
        options: ["One end looser than the other", "The teeth facing in any direction", "The teeth pointing backward", "The teeth pointing forward"],
        answer: 3
    },
    {
        q: "A hacksaw blade with 34 TPI should be used for cutting:",
        options: ["Brass", "Cast iron", "Heavy stock", "Thin wall tubing"],
        answer: 3
    },
    {
        q: "An all-hard hacksaw blade is best suited for work on:",
        options: ["Brass", "Cast iron", "Tool steel", "Any of the above"],
        answer: 3
    },
    {
        q: "A hacksaw blade with 14 TPI is best suited for cutting:",
        options: ["Cold rolled steel", "Hot rolled steel", "Structural steel", "Any of the above"],
        answer: 3
    },
    {
        q: "Files are divided into two general classes, namely:",
        options: ["Flat shapes and round shapes", "Large and small", "Rough and smooth", "Single-cut and double-cut"],
        answer: 3
    },
    {
        q: "A hacksaw blade can be placed in a frame in:",
        options: ["One position", "Two positions", "Three positions", "Four positions"],
        answer: 3
    },
    {
        q: "A hard hacksaw blade is one that:",
        options: ["Has a hard back and flexible teeth", "Has a flexible back and hard teeth", "Has the entire blade hardened", "Will only fit a solid frame hacksaw"],
        answer: 2
    },
    {
        q: "Hacksaw blades with 24 TPI are best suited for cutting:",
        options: ["Brass and copper", "Sheet metal over 18 gages", "Tubing", "Any of the above"],
        answer: 3
    },
    {
        q: "Hacksaw blades are made of:",
        options: ["High speed steel", "Tool steel", "Tungsten alloy steel", "Any of the above"],
        answer: 3
    },
    {
        q: "A flexible hacksaw blade is one that has:",
        options: ["A movable blade", "Flexible ends", "Only the back hardened", "Only the teeth hardened"],
        answer: 3
    },
    {
        q: "When a lathe tool bit burns, it means that the:",
        options: ["Speed is too low", "Speed is too fast", "Material is too hard", "Material cannot be cut"],
        answer: 1
    },
    {
        q: "The lathe compound is used for:",
        options: ["Angle cutting", "Grooving", "Facing", "Any of the above"],
        answer: 3
    },
    {
        q: "A universal chuck cannot be used to cut:",
        options: ["An eccentric", "A round stock", "A cam", "A and C"],
        answer: 3
    },
    {
        q: "The jaw of a standard vise is:",
        options: ["Hard", "Semi-hard", "Semi-soft", "Soft"],
        answer: 0
    },
    {
        q: "When facing off a piece of material in the lathe chuck, the bit must be set:",
        options: ["Above center", "At the center", "Below the center", "Off center"],
        answer: 1
    },
    {
        q: "The outbreak of fire can be avoided by preventing:",
        options: ["Fuel", "Heat", "Oxygen", "Any one of the above"],
        answer: 3
    },
    {
        q: "The square head of a combination set is used for marking or checking angles of:",
        options: ["90° only", "45° only", "90° and 45°", "Any angle between 0-180°"],
        answer: 2
    },
    {
        q: "Angle plate is made of:",
        options: ["Closed grain cast iron", "Cast steel", "Tool steel", "High speed steel"],
        answer: 0
    },
    {
        q: "The eye hole of a hammer head is made in oval shape and tapered towards the centre because:",
        options: ["It is easy for production", "It is specially designed by experts", "It accommodates the handle and a wedge for preventing it from flying off", "None of the above"],
        answer: 2
    },
    {
        q: "The jaws of a leg vice are opened:",
        options: ["Parallel to each other", "In 'V' form", "A and B both", "Neither A nor B"],
        answer: 1
    },
    {
        q: "For general work, the cutting angle of a cold flat chisel is ground at an angle of:",
        options: ["80°", "70°", "60°", "35°"],
        answer: 2
    },
    {
        q: "A new hacksaw blade should not be used in an old cut because:",
        options: ["The blade is very costly", "The blade has very sharp teeth", "The space is not sufficient to play the new blade in the old cut", "None of the above"],
        answer: 2
    },
    {
        q: "Which part of a file is not hardened?",
        options: ["Tang", "Heel", "Body", "Point"],
        answer: 0
    },
    {
        q: "In case of a flat scraper, the depth of the cut is varied by:",
        options: ["Changing the convexity of the cutting angle", "Changing its inclination", "Changing its weight", "None of the above"],
        answer: 1
    },
    {
        q: "Generally, a spiral fluted reamer has spirals of:",
        options: ["Left hand", "Right hand", "Straight", "None of the above"],
        answer: 0
    },
    {
        q: "In which screw thread is: side = width of flat = width of space = 0.5p?",
        options: ["Knuckle", "Buttress", "Square", "Acme"],
        answer: 2
    },
    {
        q: "A stud is which of the following?",
        options: ["Has threads on one end", "Requires a nut", "Inserted in a plain hole", "None of the above"],
        answer: 3
    },
    {
        q: "'18-8' stainless steel means:",
        options: ["18% Tungsten and 8% Chromium", "18% Chromium and 8% Nickel", "18% Nickel and 8% Chromium", "18% Chromium and 8% Cobalt"],
        answer: 1
    },
    {
        q: "Which is the lightest metal?",
        options: ["Lead", "G.I. Sheet", "Aluminum", "Cast iron"],
        answer: 2
    },
    {
        q: "Hardened steel parts have:",
        options: ["Fine grains", "Coarse grains", "Medium grains", "None of the above"],
        answer: 0
    },
    {
        q: "Concentricity of an outside diameter can be checked by:",
        options: ["Vernier caliper", "Outside micrometer", "Dial test indicator", "Tube micrometer"],
        answer: 2
    },
    {
        q: "Which micrometer has no anvil?",
        options: ["Outside micrometer", "Depth micrometer", "Screw thread micrometer", "Digit micrometer"],
        answer: 1
    },
    {
        q: "Which micrometer is available with extension rods?",
        options: ["Outside micrometer", "Inside micrometer", "Screw thread micrometer", "Combi micrometer"],
        answer: 1
    },
    {
        q: "Which gauge is used to check internal threads?",
        options: ["Plug gauge", "Ring gauge", "Thread plug gauge", "Thread ring gauge"],
        answer: 2
    },
    {
        q: "In case of a limit plug gauge, which size will not enter into the hole?",
        options: ["'Go' size", "'Not Go' size", "A and B both", "None of the above"],
        answer: 1
    },
    {
        q: "Limit gauge is made to the _____ sizes of the work to be measured.",
        options: ["Actual and nominal", "Nominal and upper limit", "Nominal and lower limit", "Minimum and maximum"],
        answer: 3
    },
    {
        q: "'Go' limit is:",
        options: ["Upper limit of shaft", "Lower limit of shaft", "A and B both", "Neither A and B"],
        answer: 2
    },
    {
        q: "Lapping is done:",
        options: ["To finish the job to a fine degree of accuracy", "To get high quality of surface finish", "To control the size", "All of the above"],
        answer: 3
    },
    {
        q: "In which method is a bore finished to a very close tolerance?",
        options: ["Lapping", "Honing", "Grinding", "Turning"],
        answer: 1
    },
    {
        q: "Jig bushings are generally made of:",
        options: ["Mild steel", "Cast iron", "Tool steel", "Brass"],
        answer: 2
    },
    {
        q: "Fixture clamps are generally made of:",
        options: ["High carbon steel", "Case hardened mild steel", "High speed steel", "Alloy steel"],
        answer: 1
    },
    {
        q: "Successful designing of jigs and fixtures depends upon:",
        options: ["Clamping arrangement", "Tool guiding elements", "Manufacturing conditions", "All of the above"],
        answer: 3
    },
    {
        q: "When an external gear is meshed with an internal gear, the gears will rotate in:",
        options: ["Same direction", "Opposite direction", "Will not rotate", "None of the above"],
        answer: 0
    },
    {
        q: "While soldering, flux is used because:",
        options: ["It assists for quick melting and increasing fluidity of solder", "It saves the part from oxidation", "It takes the molten metal on all surfaces", "All of the above"],
        answer: 3
    },
    {
        q: "The usual ratio of soluble oil and water used in coolant is:",
        options: ["1:10", "10:1", "1:20", "20:1"],
        answer: 2
    },
    {
        q: "If rpm = 200 and feed per revolution = 0.05 mm, then feed per minute will be:",
        options: ["100 mm", "10 mm", "4 mm", "1 mm"],
        answer: 1
    },
    {
        q: "For a given rpm, if the diameter of a twist drill increases, then the cutting speed will:",
        options: ["Increase", "Decrease", "Stay the same", "None of the above"],
        answer: 0
    },
    {
        q: "An advance motion along the longitudinal axis of a twist drill is called:",
        options: ["Speed", "Feed", "Cutting speed", "None of the above"],
        answer: 1
    },
    {
        q: "In internal cylindrical grinding, the grinding wheel and the work rotate in:",
        options: ["Same direction", "Opposite direction", "Neither A and B", "A and B both"],
        answer: 1
    },
    {
        q: "For grinding materials having low tensile strength, which abrasive is used?",
        options: ["Silicon carbide", "Aluminum carbide", "Emery", "Corundum"],
        answer: 0
    },
    {
        q: "The size of a grinding wheel is taken from:",
        options: ["Diameter of wheel", "Bore size", "Width of face", "All of the above"],
        answer: 3
    },
    {
        q: "Which center is used for supporting open end of pipes, shells etc. while turning or thread cutting in a lathe?",
        options: ["Ball centre", "Half centre", "Pipe centre", "Female centre"],
        answer: 2
    },
    {
        q: "When outside diameter of a job is turned in relation to the internal hole, the job should be held:",
        options: ["In three jaw chuck", "On lathe mandrel", "On face plate", "Between centres"],
        answer: 1
    },
    {
        q: "The included angle of a dead center is:",
        options: ["30°", "45°", "60°", "90°"],
        answer: 2
    },
    {
        q: "The angle of B.A. screw thread is:",
        options: ["60°", "55°", "45°", "47.5°"],
        answer: 3
    },
    {
        q: "Main alloying element in H.S.S. is:",
        options: ["Chromium", "Vanadium", "Tungsten", "Nickel"],
        answer: 2
    },
    {
        q: "The value of one micron is:",
        options: ["1.00 mm", "0.10 mm", "0.01 mm", "0.001 mm"],
        answer: 3
    },
    {
        q: "For the accurate measurement of bores, the best instrument is:",
        options: ["Vernier caliper", "Dial test indicator", "Plug gauge", "Inside micrometer"],
        answer: 3
    },
    {
        q: "Under the sine principle, the length of sine bar takes the place of:",
        options: ["Opposite side", "Adjacent side", "Hypotenuse", "Height"],
        answer: 2
    },
    {
        q: "In a hydraulic driven shaper, the metal is removed at:",
        options: ["Higher speed", "Lower speed", "Average speed", "None of the above"],
        answer: 0
    },
    {
        q: "In a shaper, the cutting speed (metric) is expressed in:",
        options: ["Meter per minute", "Meter per second", "Meter per hour", "None of the above"],
        answer: 0
    },
    {
        q: "Amount of automatic feed in a shaper is increased by taking the crank pin:",
        options: ["At the centre of crank disc", "Towards the centre of crank disc", "Away from the centre of crank disc", "None of the above"],
        answer: 2
    },
    {
        q: "In a shaper, the feed (metric) is usually expressed in:",
        options: ["mm/stroke", "mm/revolution", "meter/minute", "None of the above"],
        answer: 0
    },
    {
        q: "For cutting gear teeth in a shaper, the _____ tool is used:",
        options: ["Gooseneck", "V-shaped", "Round nose", "Form"],
        answer: 3
    },
    {
        q: "Shaper tool bit should not extend in the tool holder beyond:",
        options: ["5 mm", "15 mm", "25 mm", "50 mm"],
        answer: 1
    },
    {
        q: "The standard ratio of cutting to return stroke in a shaper is:",
        options: ["3:1", "1:3", "2:3", "3:2"],
        answer: 3
    },
    {
        q: "A tipped tool is more useful than H.S.S. tool because:",
        options: ["It can resist more heat", "It can keep the cutting point sharp", "Cutting speed can be increased", "All of the above"],
        answer: 3
    },
    {
        q: "The feed in a shaper takes place at:",
        options: ["The beginning of return stroke", "The beginning of cutting stroke", "The middle of return stroke", "The end of return stroke"],
        answer: 3
    },
    {
        q: "Which of the following quick return mechanisms is most widely used in most slotters?",
        options: ["Whitworth mechanism", "Slotter disc mechanism", "Hydraulic mechanism", "Slotter link and gear mechanism"],
        answer: 0
    },
    {
        q: "In a slotter, the cutting speed depends upon:",
        options: ["Materials to be cut", "Materials of the slotter tool", "Finish required", "All of the above"],
        answer: 3
    },
    {
        q: "The clamping block used in a slotter to support the end of the strap is made of:",
        options: ["H.S.S.", "High carbon steel", "Lead", "Wood"],
        answer: 3
    },
    {
        q: "Divided table planer has:",
        options: ["One table", "Two tables", "One housing", "Two housing"],
        answer: 1
    },
    {
        q: "The straddle milling is done by means of two:",
        options: ["Side milling cutters", "Plain milling cutters", "Face milling cutters", "Form cutters"],
        answer: 0
    },
    {
        q: "The formula to find out the number of turns of the crank for simple indexing is:",
        options: ["T = 20/N", "T = N/20", "T = 40/N", "T = N/40"],
        answer: 2
    },
    {
        q: "In a standard worm dividing head, the ratio between the worm wheel and the worm is:",
        options: ["10:1", "20:1", "30:1", "40:1"],
        answer: 3
    },
    {
        q: "In a standard dividing head, 3 holes in 27 hole circles will be:",
        options: ["6°", "4°", "2°", "1°"],
        answer: 3
    },
    {
        q: "Planer type milling machine is built up for work of:",
        options: ["Light duty", "Heavy duty", "Medium duty", "None of the above"],
        answer: 1
    },
    {
        q: "In a straddle milling operation, how many cutters are used to mill the work?",
        options: ["One", "Two", "Three or more", "Any one of the above"],
        answer: 1
    },
    {
        q: "For gear cutting, which cutter is used?",
        options: ["End mill cutter", "Plain milling cutter", "Form relief cutter", "All of the above"],
        answer: 2
    },
    {
        q: "The approximate hardness of an HSS end mill cutter is:",
        options: ["45 HRC", "52 HRC", "62 HRC", "72 HRC"],
        answer: 2
    },
    {
        q: "The over arm of a milling machine is used to support:",
        options: ["Spindle", "Arbor", "Column", "Table"],
        answer: 1
    },
    {
        q: "Which of the following conditions may cause error during knurling?",
        options: ["Too much longitudinal feed", "Clamped length of tool too short", "Surface speed too low", "Unnecessary support with tailstock centre"],
        answer: 0
    },
    {
        q: "The cutter which works simultaneously with both up cut and down cut process is:",
        options: ["Side milling cutter", "Semi-circular milling cutter", "Shell end mill", "Plain milling cutter"],
        answer: 2
    },
    {
        q: "A polygon with 9 flats is to be milled using the indexing head with 40:1 ratio. The crank rotation is:",
        options: ["9 full rotations", "5 full rotations, 2 holes on 36 hole circle", "4 full rotations, 12 holes on 27 hole circle", "2 full rotations, 16 holes on 47 hole circle"],
        answer: 2
    },
    {
        q: "Where are relieved cutters reground?",
        options: ["On the circumference", "Relieved cutters are not reground", "On the flank", "On the side faces"],
        answer: 2
    },
    {
        q: "What happens if the job is loosely fitted between centres in cylindrical grinding?",
        options: ["The job will be out of round", "The job will be oversized", "The job will be thrown out", "The job will not rotate"],
        answer: 0
    },
    {
        q: "What is used to clean gauge blocks before and after use?",
        options: ["Brush", "Cotton waste", "Chamois leather or linen cloth", "None of the above"],
        answer: 2
    },
    {
        q: "One of the causes of grinding wheel glazing is:",
        options: ["Grain size is too fine", "Wheel is hard", "Wheel speed is too fast", "A and B both"],
        answer: 3
    },
    {
        q: "The grade of a grinding wheel depends upon:",
        options: ["Grain size", "Structure", "Kind of abrasive", "Hardness of bond"],
        answer: 3
    },
    {
        q: "Which kind of bond is commonly used in grinding wheels?",
        options: ["Vitrified", "Rubber", "Shellac", "Silicon"],
        answer: 0
    },
    {
        q: "A grinding wheel marked 'C' is made with the abrasive:",
        options: ["Aluminum oxide", "Silicon carbide", "Combination of A and B", "Corundum"],
        answer: 1
    },
    {
        q: "As per Indian standard, grain size 46 comes under the group:",
        options: ["Coarse grain", "Medium grain", "Fine grain", "Very fine grain"],
        answer: 1
    },
    {
        q: "As per Indian standard, 'M' grade wheel comes under the group:",
        options: ["Soft", "Medium", "Hard", "None of the above"],
        answer: 1
    },
    {
        q: "The symbol conventionally used for resinoid bond is:",
        options: ["'V'", "'R'", "'B'", "'E'"],
        answer: 2
    },
    {
        q: "In a grinding wheel marked as 51A 46L 5V 23, the number '5' means:",
        options: ["Kind of abrasive", "Kind of bond", "Structure", "Grain size"],
        answer: 2
    },
    {
        q: "Balancing of a grinding wheel is done to:",
        options: ["Make the outside diameter concentric with the bore", "Make the sides of wheel parallel", "Equalize the weight in every portion of the wheel", "None of the above"],
        answer: 2
    },
    {
        q: "Grinding fluids are used to:",
        options: ["Reduce friction between wheel face and job", "Cool the wheel", "Prevent loading of wheel", "All of the above"],
        answer: 3
    },
    {
        q: "Taps are resharpened by grinding:",
        options: ["Flutes", "Threads", "Diameter", "Relief"],
        answer: 0
    },
    {
        q: "In a vertical milling machine, the spindle is attached ______ to the work table.",
        options: ["Horizontal", "Vertical", "Angular", "None of the above"],
        answer: 1
    },
    {
        q: "In a slotter, the table gets _____ different feeds.",
        options: ["One", "Two", "Three", "None of the above"],
        answer: 2
    },
    {
        q: "If the clearance angle is 5° and the lip (wedge) angle is 75°, the rake angle will be:",
        options: ["80°", "70°", "10°", "None of the above"],
        answer: 2
    },
    {
        q: "Where does the speed motion take place in a slotting machine?",
        options: ["During the cutting motion", "After each forward stroke", "At the end of return motion", "After each double stroke"],
        answer: 3
    },
    {
        q: "During which milling method is the formation of chatter marks very likely?",
        options: ["Down cut milling with straight tooth cutter", "Up cut milling with straight tooth cutter", "Face milling with straight tooth cutter", "While using spiral tooth cutter"],
        answer: 1
    },
    {
        q: "The internal and external taper on cylindrical jobs are ground in:",
        options: ["Plain cylindrical grinding machine", "Universal cylindrical grinding machine", "Internal grinding machine", "Centerless grinding machine"],
        answer: 1
    },
    {
        q: "Which bond is suitable in wet grinding?",
        options: ["Rubber", "Silicate", "Shellac", "None of the above"],
        answer: 1
    },
    {
        q: "The common measuring tools are:",
        options: ["Steel rule", "Vernier caliper", "Micrometer", "All of the above"],
        answer: 3
    },
    {
        q: "An operation of stretching or spreading metal by means of the peen of a hammer.",
        options: ["Peening", "Swaging", "Bending", "Upsetting"],
        answer: 0
    },
    {
        q: "The good quality of a measuring tool includes that it should be:",
        options: ["Easy to handle", "Easy to read", "Wear resistant", "All of the above"],
        answer: 3
    },
    {
        q: "A notching device used to hold or grip a workpiece while filing, chipping, or any other bench work.",
        options: ["Vise", "Clamp", "Grip", "Pressed"],
        answer: 0
    },
    {
        q: "A multi-pointed hand cutting tool used to remove material from metallic and non-metallic workpieces to match drawing shape and size.",
        options: ["Cold chisel", "File", "Hacksaw", "None of the above"],
        answer: 1
    },
    {
        q: "A side cutting tool used for accurately finishing straight or tapered holes already drilled or bored.",
        options: ["Reamer", "Swaging", "Peening", "Tapping"],
        answer: 0
    },
    {
        q: "A device used to fix two or more parts.",
        options: ["Jigs", "Fixtures", "Fastener", "Clamps"],
        answer: 2
    },
    {
        q: "A machine element inserted parallel to the axis of the shaft.",
        options: ["Fastener", "Cutter", "Key", "None of the above"],
        answer: 2
    },
    {
        q: "The process of extracting iron in a blast furnace is called:",
        options: ["Sintering", "Smelting", "Casting", "Manufacturing"],
        answer: 1
    },
    {
        q: "Which of the following is a product of a blast furnace?",
        options: ["Wrought iron", "Cast iron", "Pig iron", "Gray iron"],
        answer: 2
    },
    {
        q: "A type of iron which contains 3 to 3.5% carbon either in combined form or in true state.",
        options: ["Wrought iron", "Cast iron", "Pig iron", "Gray iron"],
        answer: 1
    },
    {
        q: "Which furnace is used for the manufacture of cast iron?",
        options: ["Cupola furnace", "Crucible furnace", "Electric furnace", "All of the above"],
        answer: 3
    },
    {
        q: "A product of a puddling furnace which contains less than 0.10% carbon.",
        options: ["Wrought iron", "Cast iron", "Pig iron", "Gray iron"],
        answer: 0
    },
    {
        q: "Which of the following is a property of wrought iron?",
        options: ["Ductile", "Brittle", "Cannot be forged", "Can be easily cast into different shapes"],
        answer: 0
    },
    {
        q: "Which of the following gives greater hardness, cutting toughness and fine grain structure?",
        options: ["Chromium", "Nickel", "Tungsten", "Vanadium"],
        answer: 0
    },
    {
        q: "It is the process of making the outer surface of a steel part harden.",
        options: ["Frame hardening", "Hardening", "Case hardening", "Carburizing"],
        answer: 2
    },
    {
        q: "A case hardening process by which the carbon content of the steel near the surface of a part is increased.",
        options: ["Nitriding", "Tempering", "Carburizing", "Flame hardening"],
        answer: 2
    },
    {
        q: "A case hardening process in which the workpiece is heated in a stream of ammonia at 500 to 550°C.",
        options: ["Carburizing", "Nitriding", "Tempering", "Normalizing"],
        answer: 1
    },
    {
        q: "The size by which it is referred to as a matter of convenience is called:",
        options: ["Basic size", "Actual size", "Nominal size", "Effective size"],
        answer: 2
    },
    {
        q: "A device which holds the job in position and guides the cutting tool.",
        options: ["Clamp", "Jig", "Vise", "Grip"],
        answer: 1
    },
    {
        q: "A device which holds the job firmly.",
        options: ["Clamp", "Grip", "Fixture", "Jig"],
        answer: 2
    },
    {
        q: "The outer surface or face of the rim of the pulley made in convex form to keep the belt in center.",
        options: ["Crowning", "Dressing", "Creep", "Slip"],
        answer: 0
    },
    {
        q: "It is used to transmit motion at high speed without producing noise.",
        options: ["Bevel gears", "Hypoid gears", "Helical gears", "Worm gears"],
        answer: 2
    },
    {
        q: "It is used to transmit motion at high speed with heavy load without producing noise.",
        options: ["Worm gear", "Herring bone gear", "Bevel gear", "Spur gear"],
        answer: 1
    },
    {
        q: "It is used to connect and disconnect the driving and driven units.",
        options: ["Brake", "Spring", "Clutch", "Coupling"],
        answer: 2
    },
    {
        q: "It connects the shafts with soft material such as rubber, leather and canvas.",
        options: ["Universal coupling", "Flexible coupling", "Rigid coupling", "Oldham coupling"],
        answer: 1
    },
    {
        q: "What is used to connect the shafts whose axes are intersecting?",
        options: ["Rigid coupling", "Oldham coupling", "Flexible coupling", "Universal coupling"],
        answer: 3
    },
    {
        q: "It is generally used on high speed with light load because it has point contact.",
        options: ["Ball bearing", "Roller bearing", "Metal bearing", "Wood bearing"],
        answer: 0
    },
    {
        q: "It is generally used on high speed with heavy load because it has line contact.",
        options: ["Plastic bearing", "Metal bearing", "Roller bearing", "Ball bearing"],
        answer: 2
    },
    {
        q: "A process by which the length of a workpiece is increased by reducing its cross sectional area.",
        options: ["Drawing out", "Drifting", "Jumping", "Upsetting"],
        answer: 0
    },
    {
        q: "A process by which the length of a workpiece is reduced.",
        options: ["Upsetting", "Drawing out", "Drifting", "Jumping"],
        answer: 3
    },
    {
        q: "A set of gears fitted in different positions on a plain, controlled by a lever.",
        options: ["Gear train", "Stud gear", "Tumbler gear", "Differential gear"],
        answer: 2
    },
    {
        q: "It moves on the lathe bed with cutting tool according to the rotation of the lead screw.",
        options: ["Apron", "Compound rest", "Saddle", "Mandrel"],
        answer: 2
    },
    {
        q: "It acts on the carriage or compound rest through the mechanism lifted inside the ___.",
        options: ["Saddle", "Apron", "Compound", "Mandrel"],
        answer: 1
    },
    {
        q: "It gives the cutting tool longitudinal feed, cross feed or angular feed.",
        options: ["Compound rest", "Apron", "Saddle", "Carriers"],
        answer: 0
    },
    {
        q: "A holding device used to hold the job properly when turning the outer surface through the finished hole.",
        options: ["Clamp", "Fixture", "Jig", "Mandrel"],
        answer: 3
    },
    {
        q: "Which of the following gives shearing action?",
        options: ["Side rake", "Top rake", "Side clearance", "Front clearance"],
        answer: 1
    },
    {
        q: "What supports top rake?",
        options: ["Front clearance", "Side clearance", "Side rake", "End clearance"],
        answer: 0
    },
    {
        q: "Which of the following reduces the rubbing action?",
        options: ["Front clearance", "Side clearance", "Side rake", "Top rake"],
        answer: 0
    },
    {
        q: "An operation of milling complex surfaces with the help of a group of cutters mounted on the same arbor.",
        options: ["Gang milling", "Straddle milling", "Climb milling", "Down milling"],
        answer: 0
    },
    {
        q: "An operation of milling two opposite sides of a workpiece at a time by using two side milling cutters on the same arbor.",
        options: ["Gang milling", "Straddle milling", "Side milling", "Face milling"],
        answer: 1
    },
    {
        q: "An attachment to the milling machine which helps to divide the job periphery into a number of equal divisions.",
        options: ["Index", "Dividing head", "Slotting", "Universal spiral"],
        answer: 1
    },
    {
        q: "An operation to divide the periphery of the job into a number of equal parts accurately.",
        options: ["Dividing head", "Indexing", "Slotting", "None of the above"],
        answer: 1
    },
    {
        q: "The angle formed between the face of the tool and the work surface at the point of contact.",
        options: ["Clearance angle", "Cutting angle", "Rake angle", "Wedge angle"],
        answer: 1
    },
    {
        q: "The size of a tri square is measured from the inner edge of stock to the end of its:",
        options: ["Base", "Blade", "Edge", "Body"],
        answer: 1
    },
    {
        q: "The best method of avoiding accidents is by observing _____ related to job, machine and work place.",
        options: ["Emery", "Opponent", "Safety precaution", "Cleanliness"],
        answer: 2
    },
    {
        q: "Mallets are made of:",
        options: ["Hardwood", "Soft wood", "Steel", "Cast iron"],
        answer: 0
    },
    {
        q: "Staggering of hacksaw blade teeth on both sides alternately is called:",
        options: ["Positioning the teeth", "Arrangement of teeth", "Setting of teeth", "None of the above"],
        answer: 2
    },
    {
        q: "The size of a file is measured from ______ to heel of the file.",
        options: ["Edge", "Base", "Point", "Body"],
        answer: 2
    },
    {
        q: "It is the distance measured from the axis from a point on a screw thread to the corresponding point on the next thread.",
        options: ["Lead", "Pitch", "Linear", "Chord"],
        answer: 1
    },
    {
        q: "Solder is an alloy of:",
        options: ["Lead and zinc", "Lead and tin", "Lead and tungsten", "Lead and antimony"],
        answer: 1
    },
    {
        q: "A machine tool used for cutting flat surfaces by reciprocating a single point tool across the workpiece.",
        options: ["Planer", "Shearing machine", "Shaper", "Slab cutter"],
        answer: 2
    },
    {
        q: "The machine used for shaping metal or plastic by pushing or pulling a broach across a surface or through a hole.",
        options: ["Planning", "Shaping", "Broaching", "Milling"],
        answer: 2
    },
    {
        q: "A milling method in which parts placed in a row parallel to the axis of the cutting tool are milled simultaneously.",
        options: ["Abreast milling", "Angular milling", "Helical milling", "None of the above"],
        answer: 0
    },
    {
        q: "A core drill with hardened steel shot pellets that revolve under the rim of the rotating tube, employed in rotary drilling in very hard ground.",
        options: ["Automatic drill", "Double core barrel drill", "Flat drill", "Adamantine drill"],
        answer: 3
    },
    {
        q: "The part of a wood planning machine that carries the cutter.",
        options: ["Adz stock", "Adz block", "Head stock", "Head block"],
        answer: 1
    },
    {
        q: "A hole in a revolving cutter or grinder wheel for mounting it on an arbor.",
        options: ["Hole saw", "Arbor hole", "Star drill", "Pump hole"],
        answer: 1
    },
    {
        q: "A machine used for forcing an arbor or mandrel into drilled or bored parts preparatory to turning or grinding.",
        options: ["Automatic press", "Bladder press", "Arc press", "Arbor press"],
        answer: 3
    },
    {
        q: "A machine in which material is pulverized between two toothed metal discs rotating in opposite directions.",
        options: ["Attrition mill", "Tumbling mill", "Ball mill", "Beater mill"],
        answer: 0
    },
    {
        q: "A press in which mechanical feeding of the work is synchronized with the press action.",
        options: ["Dial press", "Punch press", "Automatic press", "Manual press"],
        answer: 2
    },
    {
        q: "A file whose edges are parallel is known as:",
        options: ["Crochet file", "Cross cut file", "Equaling file", "Blunt file"],
        answer: 3
    },
    {
        q: "A boring machine tool used particularly for large workpieces, available in horizontal and vertical types.",
        options: ["Boring mill", "Burrstone mill", "Cage mill", "Chile mill"],
        answer: 0
    },
    {
        q: "A tap with a chamfer 1 to 1½ threads in length.",
        options: ["Center tap", "Bottom tap", "Taper tap", "Plug tap"],
        answer: 1
    },
    {
        q: "A small portable hand drill customarily used by hand setters to drill holes.",
        options: ["Diamond drill", "Spiral drill", "Churn drill", "Breast drill"],
        answer: 3
    },
    {
        q: "The spindle of the grinding machine on which the wheel is mounted.",
        options: ["Bushing", "Arbor", "Bearing", "Fluting"],
        answer: 1
    },
    {
        q: "A device for holding grinding wheels of special shape to the working piece being ground.",
        options: ["Head stock", "Fixtures", "Jigs", "Chucks"],
        answer: 3
    },
    {
        q: "Grinding grooves of a twist drill or tap.",
        options: ["Fluting", "Flaring", "Lapping", "Honing"],
        answer: 0
    },
    {
        q: "The dulling of the cutting particles of a grinding wheel resulting in a decreased rate of cutting is called:",
        options: ["Grinding", "Glazing", "Fluting", "Lapping"],
        answer: 1
    },
    {
        q: "The process of increasing the cross-sectional area of a given portion or possibly of the whole piece.",
        options: ["Forging", "Upsetting", "Spreading", "Drawing"],
        answer: 1
    },
    {
        q: "The process of lengthening a piece of stock while the cross-sectional area is being reduced.",
        options: ["Tapping", "Honing", "Drawing", "Upsetting"],
        answer: 2
    },
    {
        q: "Sometimes used for soldering bright tin.",
        options: ["Tallow", "Sal ammonia", "Tinning", "Rosin"],
        answer: 3
    },
    {
        q: "A very effective flux for soldering galvanized iron or zinc.",
        options: ["Soldering paste", "Muriatic acid", "Zinc chloride", "Cut acid"],
        answer: 1
    },
    {
        q: "The groove providing for the cutting faces of the thread or teeth, chip passage and lubrication.",
        options: ["Heel", "Land", "Flute", "Thread relief"],
        answer: 2
    },
    {
        q: "The surface below the cutting edge.",
        options: ["Face", "Flank", "Nose", "Side relief"],
        answer: 1
    },
    {
        q: "Which is the hardest material?",
        options: ["Steel", "Diamond", "Bronze", "Brass"],
        answer: 1
    },
    {
        q: "It measures the slope of the top surface of the tool to the side in a direction perpendicular to the longitudinal axis.",
        options: ["Side rake angle", "Side cutting edge angle", "Side relief edge angle", "End relief angle"],
        answer: 0
    },
    {
        q: "A type of bonding material which is made of clay and water.",
        options: ["Resinoid bond", "Vitrified bond", "Shellac bond", "Rubber bond"],
        answer: 1
    },
    {
        q: "It is used for holding straight shank drills in the spindle of the machine when drilling.",
        options: ["Drill chuck", "Chuck key", "Floating holder", "Magic chuck"],
        answer: 0
    },
    {
        q: "Back rake for HSS single point cutting tool machining free cutting brass is:",
        options: ["0°", "5°", "10°", "15°"],
        answer: 0
    },
    {
        q: "A reamer is used to correct the:",
        options: ["Size and roundness of a drilled hole", "Finish and position of a drilled hole", "Size and position of a drilled hole", "Finish and depth of a drilled hole"],
        answer: 0
    },
    {
        q: "An oversized hole is produced by a drill if:",
        options: ["Lips of drill are of unequal length", "Speed too high", "Insufficient coolant used", "Cutting speed is too high"],
        answer: 0
    },
    {
        q: "The major factors which determine the rpm of a milling cutter are the material being cut and the:",
        options: ["Number of teeth in cutter", "Diameter of cutter", "Time allowed to complete the job", "Depth of cutter"],
        answer: 1
    },
    {
        q: "The studs used as a coolant in a machine shop consists of:",
        options: ["Solution of detergent and water", "A straight mineral oil", "An emulsion of oil and water", "A chemical solution"],
        answer: 2
    },
    {
        q: "Grinding is:",
        options: ["Metal fusing operation", "Metal powdering operation", "Metal finishing operation", "None of the above"],
        answer: 2
    },
    {
        q: "Grinding is done wherever:",
        options: ["Other machining operations cannot be carried out", "A large amount of material is to be removed", "High accuracy is required", "None of these"],
        answer: 2
    },
    {
        q: "Laser beam machining process is used to machine:",
        options: ["Thicker materials", "Thinner materials", "Heavier materials", "Stronger materials"],
        answer: 1
    },
    {
        q: "Twist drills are usually considered suitable for machining holes having a length less than:",
        options: ["Two times the diameter", "Five times the diameter", "Ten times the diameter", "Twenty times the diameter"],
        answer: 1
    },
    {
        q: "A hard grade grinding wheel is suitable for grinding:",
        options: ["Hard materials", "Soft materials", "Both materials", "None of these"],
        answer: 1
    },
    {
        q: "In quick return mechanism of a shaping machine, the ram stroke length is proportional to:",
        options: ["Slotter arm length", "Crank length", "Ram length", "None of these"],
        answer: 1
    },
    {
        q: "The type and number of bearings to be used for spindles of a machine tool depend on the:",
        options: ["Type of spindle", "Type of machine tool", "Load on bearing", "None of the above"],
        answer: 2
    },
    {
        q: "Nitriding process of surface treatment for steel tools is used for taking:",
        options: ["Light cuts", "Heavy cuts", "Medium cuts", "None of the above"],
        answer: 0
    },
    {
        q: "At very low cutting speeds, the tool wear is due to:",
        options: ["Plowing action", "Transfer", "Material", "Temperature"],
        answer: 0
    },
    {
        q: "Cutting oils are a mixture of:",
        options: ["Hard cottonseed or rapeseed oils and mineral oils", "Cooling oils", "Heating oils", "Emulsion"],
        answer: 0
    },
    {
        q: "What is the material for hacksaw blades?",
        options: ["High carbon steel", "High speed steel", "Low tungsten steel", "Any of the above"],
        answer: 3
    },
    {
        q: "How are rivets made?",
        options: ["Cold pressing", "Rolling", "Drawing", "None of these"],
        answer: 0
    },
    {
        q: "It is used to measure gap between two mating parts to set the job and machine in alignment and to measure clearance of piston and cylinders in automobiles.",
        options: ["Compound Gauge", "Feeler Gauge", "Inspection Gauge", "Workshop Gauge"],
        answer: 1
    },
    {
        q: "The movement of belt upon the face of rim or outer surface of the driver and driven pulleys within the area of arc of contact.",
        options: ["Slip", "Creep", "Interference", "Crowning"],
        answer: 1
    },
    {
        q: "It cannot be forged because it will break if heated and beaten by hammer.",
        options: ["High speed steel", "Tool steel", "Carbon steel", "Cast iron"],
        answer: 3
    },
    {
        q: "It is a process of enlarging and smoothing a punched hole by means of tapered drifts of various sizes and shapes.",
        options: ["Drifting", "Drawing", "Jumping", "Upsetting"],
        answer: 0
    },
    {
        q: "Shaper tools are made of what type of material?",
        options: ["Brass", "Bronze", "High speed steel", "Babbitt"],
        answer: 2
    },
    {
        q: "An operation of enlarging a previously drilled hole.",
        options: ["Drilling", "Boring", "Reaming", "Broaching"],
        answer: 1
    },
    {
        q: "An operation to make a smaller hole in exact center for a lathe center.",
        options: ["Broaching", "Reaming", "Counter boring", "Center drilling"],
        answer: 3
    },
    {
        q: "The size of abrasive grains produced by crushing process is called:",
        options: ["Grade", "Grit", "Grill", "None of the above"],
        answer: 1
    },
    {
        q: "It is also known as slab peripheral milling.",
        options: ["Form milling", "Climb milling", "Convex milling", "Plain milling"],
        answer: 3
    },
    {
        q: "In _____ the tool is released in the return stroke.",
        options: ["Shaper", "Planer", "Slotter", "Reamer"],
        answer: 0
    },
    {
        q: "It is the process of driving the periphery of the job in degrees.",
        options: ["Direct indexing", "Plain indexing", "Differential indexing", "Angular indexing"],
        answer: 3
    },
    {
        q: "It is a method of grinding cylindrical surfaces.",
        options: ["Centerless grinding", "Plunge-cut grinding", "Through feed grinding", "None of the above"],
        answer: 0
    },
    {
        q: "It is the angle between the side cutting edge and the longitudinal axis of the tool.",
        options: ["Side cutting edge angle", "End cutting angle", "Side relief angle", "End relief angle"],
        answer: 0
    },
    {
        q: "It is a surface finishing process used to produce a lustrous surface of attractive appearance.",
        options: ["Polishing", "Buffing", "Lapping", "Glazing"],
        answer: 1
    },
    {
        q: "A _____ is formed when a shaft rotates in a bush lined in the bore of a housing.",
        options: ["Ball bearing", "Roller bearing", "Plain bearing", "Needle bearing"],
        answer: 2
    },
    {
        q: "CNC in machine shop means:",
        options: ["Computer number control", "Computer numerical control", "Computer network center", "Communication network control"],
        answer: 1
    },
    {
        q: "It is the time lost due to breakdowns, waiting for tools, minor accidents, etc.",
        options: ["Set up time", "Handling time", "Machining time", "Down time"],
        answer: 3
    },
    {
        q: "Refers to the process of separating or removing combustible material from the neighborhood of a fire.",
        options: ["Starvation", "Blanketing", "Cooling", "None of the above"],
        answer: 0
    },
    {
        q: "What is necessary to provide tolerance?",
        options: ["It saves labor charges", "It saves material from wastage", "It saves time", "All of the above"],
        answer: 3
    },
    {
        q: "It is done by adjusting or repairing the faults noticed during work.",
        options: ["Preventive maintenance", "Predictive maintenance", "Routine maintenance", "Corrective maintenance"],
        answer: 2
    },
    {
        q: "A _____ is used between the cutting tool and workpiece to minimize friction heat.",
        options: ["Lubricant", "Coolant", "Water", "Alcohol"],
        answer: 1
    },
    {
        q: "Which of the following is NOT a function of bearings?",
        options: ["To support the shaft", "To guide the shaft", "To give free rotation to the shaft", "To transmit power"],
        answer: 3
    },
    {
        q: "It is a process of cleaning the face of a grinding wheel by removing glazing and loading to improve the cutting action.",
        options: ["Dressing", "Polishing", "Truing", "Lapping"],
        answer: 0
    },
    {
        q: "It is a long tapered punch used for loosening straight pins, rivets, and other small parts being disassembled.",
        options: ["Drive-pin punch", "Hand punch", "Drift punch", "Center punch"],
        answer: 2
    },
    {
        q: "A tool used for turning nuts or bolts.",
        options: ["Pliers", "Wrench", "Long nose", "C-clamp"],
        answer: 1
    },
    {
        q: "A _____ is used to test accuracy of holes.",
        options: ["Snap gage", "Ring gage", "Plug gage", "Depth gage"],
        answer: 2
    },
    {
        q: "A _____ consists of a hardened and ground steel bar in which two hardened and ground cylinders of the same diameter are set.",
        options: ["Caliper", "Gage block", "Sine bar", "Micrometer"],
        answer: 2
    },
    {
        q: "Lathe centers are hardened devices with a taper shank on one end and a _____ point at the other end.",
        options: ["Tailstock centre", "Lathe centers", "Live center", "Dead center"],
        answer: 1
    },
    {
        q: "It is a large casting located on the left end of the lathe bed.",
        options: ["Tail stock", "Head stock", "Carriage", "Chuck"],
        answer: 1
    },
    {
        q: "A _____ is a thread that has a lead equal to its pitch.",
        options: ["Right hand thread", "Left hand thread", "Single thread", "Multiple thread"],
        answer: 2
    },
    {
        q: "It is mounted at the top of the column and guided by the machined dovetailed surface.",
        options: ["Over arm", "Spindle", "Arbor", "Saddle"],
        answer: 0
    },
    {
        q: "The name of the mechanism a welding operator holds during gas welding at the end of which the gases mix to perform welding operations.",
        options: ["Hose", "Torch", "Gage", "Switch"],
        answer: 1
    },
    {
        q: "A fine-grained silty silica rock used for sharpening edged tools.",
        options: ["Oilstone", "Surface grinder", "Rocky oil", "None of the above"],
        answer: 0
    },
    {
        q: "A hand tool used to measure engine crank web deflection.",
        options: ["Feeler gage", "Compound gage", "Distortion gage", "Dial gage"],
        answer: 2
    },
    {
        q: "It is used to true and align machine tools, fixtures and works.",
        options: ["Dial indicator", "Radial indicator", "Dial gage", "Feeler gage"],
        answer: 0
    },
    {
        q: "It is used for external, internal and relieving of mill cutters and taps.",
        options: ["Milling attachment", "Thread attachment", "Taper attachment", "Relieving attachment"],
        answer: 3
    },
    {
        q: "The most common of the standard tapers.",
        options: ["Brown", "Janno", "Sharpe", "Morse"],
        answer: 3
    },
    {
        q: "The ability of metal to stretch, bend or twist without breaking or cracking is called:",
        options: ["Elasticity", "Ductility", "Brittleness", "Plasticity"],
        answer: 1
    },
    {
        q: "Machining properties of steel can be improved by adding:",
        options: ["Chromium nickel", "Silicon, aluminum, titanium", "Sulfur, lead, phosphorus", "Vanadium, aluminum"],
        answer: 2
    },
    {
        q: "A ductile fracture is characterized by:",
        options: ["Appreciable plastic deformation prior to propagation of crack", "Fragmentation in more than two pieces", "Negligible deformation", "Rapid rate of crack propagation"],
        answer: 0
    },
    {
        q: "Tool steel can be hardened by:",
        options: ["Heating red hot and plunging into water", "Heating red hot and cooling in blast of dry air", "Heating red hot and plunging into linseed or cottonseed oil", "Any of the above, depending on type and use"],
        answer: 3
    },
    {
        q: "The purpose of tempering is to make metal:",
        options: ["Softer", "Harder", "Less brittle", "More brittle"],
        answer: 2
    },
    {
        q: "A scriber is made of:",
        options: ["Carbon tool steel", "Cold-rolled steel", "Hot-rolled steel", "Tool steel"],
        answer: 3
    },
    {
        q: "It is used in steels as an alloying element to combine hardness obtained.",
        options: ["Vanadium", "Chromium", "Titanium", "Molybdenum"],
        answer: 1
    },
    {
        q: "It is a process of shearing in which sheet or plate is cut out to a definite outline in a press.",
        options: ["Blanking", "Embossing", "Clamping", "Trimming"],
        answer: 0
    },
    {
        q: "It is the characteristic of exhibiting different properties when tested in different directions.",
        options: ["Allotropy", "Anisotropy", "Isentropic", "Isotropic"],
        answer: 1
    },
    {
        q: "A test in which a specimen supported at both ends as a simple beam is broken by impact.",
        options: ["Charpy test", "Izod test", "Rockwell test", "Universal test"],
        answer: 0
    },
    {
        q: "Which of the following metals has the highest specific heat capacity at 100°C?",
        options: ["Aluminum", "Bismuth", "Copper", "Iron"],
        answer: 0
    },
    {
        q: "Which of the following types of packing would be used in steam joints?",
        options: ["Asbestos", "Neoprene", "Metallic", "A or C"],
        answer: 3
    },
    {
        q: "The process applied to iron pipe which retards corrosion is called:",
        options: ["Galvanizing", "Annealing", "Soldering", "Tinning"],
        answer: 0
    },
    {
        q: "Before applying layout on a piece, it must be:",
        options: ["Cleaned", "Cold", "Hot", "Roughened"],
        answer: 0
    },
    {
        q: "A piece of mild steel held against an emery wheel will give off:",
        options: ["Bright shiny sparks", "Yellow sparks", "Light straw-colored sparks", "No sparks"],
        answer: 2
    },
    {
        q: "Another name of hydrochloric acid is:",
        options: ["Acetic acid", "Muriatic acid", "Nitric acid", "Sulfuric acid"],
        answer: 1
    },
    {
        q: "A flexible hacksaw blade has a tendency to:",
        options: ["Snap easily", "Buckle or run out of line when too much pressure is applied", "Cut too fast", "Cut on a slant"],
        answer: 1
    },
    {
        q: "A pillar file is used for:",
        options: ["Filing against a shoulder", "Filing keyways", "Filing slots", "Any of the above"],
        answer: 3
    },
    {
        q: "The length of a file is measured from:",
        options: ["End to end", "Heel to end", "Point to end", "Point to heel"],
        answer: 3
    },
    {
        q: "A pillar file has:",
        options: ["One safe edge", "Three safe edges", "Two safe edges", "A and C"],
        answer: 3
    },
    {
        q: "The 'tang' is the part of a file that:",
        options: ["Does the cutting", "Fits into the handle", "Has no teeth", "Is opposite the handle"],
        answer: 1
    },
    {
        q: "One of the factors involved in the choice of a grinding wheel is:",
        options: ["The kind of material to be ground", "The amount of stock to be removed", "The kind of finish required", "All of the above"],
        answer: 3
    },
    {
        q: "The main difference between a planer and a shaper is that:",
        options: ["The planer has offset table and the shaper has a horizontal table", "The shaper has a rotating table and planer has a horizontal table", "The table of planer has reciprocating motion past the tool head while the shaper table is stationary", "One is larger than the other"],
        answer: 2
    },
    {
        q: "A piece of tool steel held against an emery wheel will give off:",
        options: ["White sparks with stars on the end", "Yellow sparks", "Dull sparks", "Green sparks"],
        answer: 0
    },
    {
        q: "If you use a dry grinding wheel for sharpening tool bits, dip the end of the bit in water frequently to prevent:",
        options: ["Annealing the cutting edge of the bit", "Burning your fingers", "Hardening of the tip", "The tip from crystallizing"],
        answer: 0
    },
    {
        q: "The tool used to check internal pipe threads is called:",
        options: ["Ring gage", "Plug gage", "Center gage", "Thread gage"],
        answer: 1
    },
    {
        q: "The tool used to check external pipe threads is called:",
        options: ["Ring gage", "Plug gage", "Pitch gage", "Center gage"],
        answer: 0
    },
    {
        q: "The operation of truing a grinding wheel is known as:",
        options: ["Dressing", "Centering", "Rounding", "Sizing"],
        answer: 0
    },
    {
        q: "The cutting angle on a drill for mild steel should be:",
        options: ["25°", "69°", "59°", "79°"],
        answer: 2
    },
    {
        q: "Which of the following is not a common drill shank?",
        options: ["Bit", "Fluted", "Straight", "Taper"],
        answer: 1
    },
    {
        q: "Tapered shanks are used on a large drill press so that:",
        options: ["The drill can be centered more easily", "The drill can be easily forced out of the sleeve with a drift", "The shank can be reground when worn", "The shank will not turn when cutting"],
        answer: 1
    },
    {
        q: "A tool bit for cutting American National Thread should be ground with a:",
        options: ["30° angle", "45° angle", "60° angle", "56° angle"],
        answer: 2
    },
    {
        q: "Center drilling is the operation of:",
        options: ["Drilling a center in an odd-shaped piece of metal", "Drilling and countersinking with one tool", "Centering with one tool and drilling with another", "Drilling a center in a piece of stock in a drill press"],
        answer: 1
    },
    {
        q: "When cutting with a drill, it will squeal due to:",
        options: ["Drill being ground properly", "Drill being too hot", "Insufficient lubrication", "Any of the above"],
        answer: 3
    },
    {
        q: "If the cutting edges of the drill are cut at different angles:",
        options: ["The drill will not cut", "The hole will be larger than the drill", "The hole will be smaller than the drill", "None of the above"],
        answer: 1
    },
    {
        q: "If the drill speed is too great, it will:",
        options: ["Cut faster", "Lose its temper", "Cut slower", "Not cut"],
        answer: 1
    },
    {
        q: "Soda added to water is used for cooling instead of plain water because:",
        options: ["It reduces the heat generated", "It improves the finish", "It overcomes rusting", "All of the above"],
        answer: 3
    },
    {
        q: "If the angle of the drill is less than 59°:",
        options: ["The drill will make a larger hole", "The drill will make a smaller hole", "The hole will take longer to drill and more power is required", "The drill will not center properly"],
        answer: 2
    },
    {
        q: "The name of the shank used on a drill is:",
        options: ["Stanley", "Starret", "Morse", "Miller"],
        answer: 2
    },
    {
        q: "The tool used to cut thread on pipe is called:",
        options: ["Pipe tool", "Pipe vise", "Pipe stock", "Pipe thread"],
        answer: 2
    },
    {
        q: "The instrument used to reshape a grinding wheel that is out of round is called:",
        options: ["Wheel cutter", "Wheel aligner", "Wheel emery", "Wheel dresser"],
        answer: 3
    },
    {
        q: "The instrument used to remove old packing glands and stuffing boxes.",
        options: ["Packing tools", "Packing bills", "Gland box clearance", "Packing stuff"],
        answer: 0
    },
    {
        q: "Before drilling a hole in a piece of metal, it should be:",
        options: ["Center punched", "Marked with chalk", "Protracted", "Scribed"],
        answer: 0
    },
    {
        q: "When measuring a drill for size, measure across the:",
        options: ["Shank", "Flute", "Lip", "Margin"],
        answer: 3
    },
    {
        q: "The size of a drill is stamped on the:",
        options: ["Flute", "Shank", "Margin", "Point"],
        answer: 1
    },
    {
        q: "The tool used for cleaning files is called:",
        options: ["File cleaner", "File card", "File oilstone", "Scraper"],
        answer: 1
    },
    {
        q: "Which of the following is not a common term relating to the classification of fits?",
        options: ["Tunking", "Snug", "Bound", "Medium force fit"],
        answer: 2
    },
    {
        q: "The usual ratio of forward and return stroke in quick return mechanism of a shaping machine is:",
        options: ["2:1", "4:3", "3:2", "5:2"],
        answer: 2
    },
    {
        q: "Electron beam machining process is quite suitable for material having:",
        options: ["High melting point and high thermal conductivity", "High melting point and low thermal conductivity", "Low melting point", "Low thermal conductivity"],
        answer: 1
    }
]

};

// GLOBAL VARIABLES
let wrongQuestions = [];
let shuffledQuestions = [];
let currentScore = 0;
let currentQuestionIndex = 0;
let currentModuleKey = "";

// START THE QUIZ
function startModule(moduleKey) {
    wrongQuestions = [];
    currentModuleKey = moduleKey;
    currentQuestionIndex = 0;
    currentScore = 0;

    shuffledQuestions = [...allModules[moduleKey]];
    shuffleArray(shuffledQuestions);

    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('question').style.display = 'block';
    document.getElementById('choices').style.display = 'block';
    document.getElementById('home-btn').style.display = 'block';
    document.getElementById('completion-screen').style.display = 'none';
    document.getElementById('progress-container').style.display = 'block';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('next-btn').style.display = 'none';

    loadQuestion();
}

// LOAD THE QUESTION
function loadQuestion() {
    const qData = shuffledQuestions[currentQuestionIndex];
    const total = shuffledQuestions.length;
    if (!qData) return;

    const progressPercent = ((currentQuestionIndex + 1) / total) * 100;
    document.getElementById('progress-bar').style.width = progressPercent + "%";
    document.getElementById('question').innerText = qData.q;

    let choices = qData.options.map((opt, index) => {
        return { text: opt, isCorrect: index === qData.answer };
    });

    shuffleArray(choices);

    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = "";

    choices.forEach((choice) => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('choice-btn');
        button.onclick = () => checkAnswerImproved(choice.isCorrect, button, choices);
        choicesContainer.appendChild(button);
    });

    document.getElementById('result').innerText = "";
}

// CHECK THE ANSWER
function checkAnswerImproved(isCorrect, clickedButton, choices) {
    const buttons = document.querySelectorAll('.choice-btn');
    const resultDisplay = document.getElementById('result');
    const nextBtn = document.getElementById('next-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        clickedButton.classList.add('correct');
        resultDisplay.innerText = "✅Ayoss, Good job!";
        resultDisplay.style.color = "#27ae60";
        currentScore++;
    } else {
        clickedButton.classList.add('wrong');
        resultDisplay.innerText = "❌ grades doesnt define intelligence";
        resultDisplay.style.color = "#e74c3c";

        wrongQuestions.push(shuffledQuestions[currentQuestionIndex]);

        const allButtons = document.querySelectorAll('.choice-btn');
        allButtons.forEach((btn, i) => {
            if (choices[i].isCorrect) {
                btn.classList.add('correct');
            }
        });
    }

    nextBtn.style.display = "block";

    // FIXED: clone the button to remove ALL old event listeners before adding new one
    const freshNextBtn = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(freshNextBtn, nextBtn);

    freshNextBtn.style.display = "block";
    freshNextBtn.addEventListener('click', function() {
        freshNextBtn.style.display = "none";
        proceedToNext();
    });
}

function proceedToNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showResult();
    } else {
        loadQuestion();
    }
}
// SHOW RESULTS
function showResult() {
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('question').style.display = 'none';
    document.getElementById('choices').style.display = 'none';
    // REMOVED: home-btn hide line

    const screen = document.getElementById('completion-screen');
    if (screen) {
        screen.style.display = 'block';

        const totalQuestions = shuffledQuestions.length;
        document.getElementById('final-stats').innerText = `You scored ${currentScore} out of ${totalQuestions}.`;

        let percentage = (currentScore / totalQuestions) * 100;
        let feedback = "";

        if (percentage === 100) feedback = "Ready na ka mag board exam!";
        else if (percentage >= 75) feedback = "Great job! Ano jay?.";
        else if (percentage >= 50) feedback = "Not bad, review the PDF.";
        else feedback = "Keep practicing, Engineer!";

        document.getElementById('feedback-text').innerText = feedback;

        const existingBtn = document.getElementById('retry-wrong-btn');
        if (existingBtn) existingBtn.remove();

        if (wrongQuestions.length > 0) {
            const retryBtn = document.createElement('button');
            retryBtn.id = 'retry-wrong-btn';
            retryBtn.innerText = `Retry ${wrongQuestions.length} Wrong Questions`;
            retryBtn.classList.add('module-btn');
            retryBtn.style.marginTop = "20px";
            retryBtn.onclick = retryWrongQuestions;
            screen.appendChild(retryBtn);
        }
    }
}

function retryWrongQuestions() {
    shuffledQuestions = [...wrongQuestions];
    wrongQuestions = [];
    currentQuestionIndex = 0;
    currentScore = 0;

    document.getElementById('completion-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('question').style.display = 'block';
    document.getElementById('choices').style.display = 'block';
    document.getElementById('progress-container').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('home-btn').style.display = 'block'; // FIXED: keep home btn visible

    loadQuestion();
}

// SHUFFLE UTILITY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// SUBJECT AND LESSON DATA
const subjectData = {
    'Theory of Machines': [
        { name: 'Lecture 1: Mechanisms', key: 'module1' },
        { name: 'Lecture 2: Motion', key: 'module2' },
        { name: 'Lecture 3: Linkages', key: 'module3' },
        { name: 'Lecture 4: Mobility', key: 'module4' },
        { name: 'Lecture 5: Grashof', key: 'module5' },
        { name: 'Lecture 6: Synthesis', key: 'module6' },
        { name: 'Lecture 7: Instant Centers', key: 'module7' }
    ],
    'Machine Shop': [
        { name: 'Hand Tools', key: 'handToolsQuiz' },      
        { name: 'Layout Tools', key: 'layoutTools' },
        { name: 'Measurement', key: 'measurementQuiz'},
        { name: 'Safety in the Shop', key:'safetyQuiz'},
        { name: 'Drilling', name:'drillingQuiz'},
        { name: 'Lathe Machine Operation', key:'latheQuiz'}
    ],
    'Machine Shop Elements': [
        {name:'Elements', key:'machineShopPDF'}
    ]
};

// SHOW LESSONS FOR A SUBJECT
function showLessons(subject) {
    const subjectMenu = document.getElementById('subject-menu');
    const lessonMenu = document.getElementById('lesson-menu');
    const lessonGrid = document.getElementById('lesson-grid');
    const lessonTitle = document.getElementById('lesson-title');

    lessonGrid.innerHTML = '';
    lessonTitle.innerText = `Lectures for ${subject}:`;

    subjectData[subject].forEach(lesson => {
        const btn = document.createElement('button');
        btn.className = 'module-btn';
        btn.innerText = lesson.name;
        btn.onclick = () => startModule(lesson.key);
        lessonGrid.appendChild(btn);
    });

    subjectMenu.style.display = 'none';
    lessonMenu.style.display = 'block';
}

// BACK TO SUBJECTS
function backToSubjects() {
    document.getElementById('subject-menu').style.display = 'block';
    document.getElementById('lesson-menu').style.display = 'none';
}

// RETURN TO MENU
function returnToMenu() {
    document.getElementById('menu-container').style.display = 'block';
    document.getElementById('subject-menu').style.display = 'block';
    document.getElementById('lesson-menu').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('completion-screen').style.display = 'none';
}