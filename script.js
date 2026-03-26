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
        { name: 'Hand Tools', key: 'handToolsQuiz' },      // FIXED: added missing comma
        { name: 'Layout Tools', key: 'layoutTools' }
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