let frameCount = 12;
let answer = null;

let data = [
    {
        "answer": "Jupiter",
        "clues": [
            "Thursday in French",
            "Famous anticyclone",
            "Zeus",
            "Strong magnetic field",
            "Largest of 8",
            "Chief",
            "By jove!",
            "Roman army symbol",
            "Banded surface",
            "Sam's fire engine",
            "One of the giants",
            "Thunder and lightning"
        ]
    },
    {
        "answer": "Limerick",
        "clues": [
            "Introduces a person and a place",
            "Rhymes",
            "Parts 1, 2 & 5: Similar ending",
            "Funny",
            "Spike Milligan",
            "Anapaestic",
            "13 feet in total",
            "Irish county",
            "Parts 3 & 4: Similar ending",
            "There was...",
            "Sometimes rude",
            "'Book of Nonsense'"
        ]
    },
    {
        "answer": "Sandwich",
        "clues": [
            "Usually has two halves",
            "Picnic item",
            "Created by an Earl",
            "Early messageboard",
            "Submarine",
            "University course",
            "Reuben",
            "Kent",
            "Victoria",
            "Can have trimmed edges",
            "Between two similar things",
            "Filling"
        ]
    },
    {
        "answer": "Space Shuttle",
        "clues": [
            "3 legs, 2 wings, 1 tail",
            "Back has two doors",
            "Faster than a bullet",
            "Works in a vacuum",
            "Re-usable",
            "Enterprise",
            "Orbiter",
            "Needed a boost",
            "Lost in 1986 & 2003",
            "Launched the HST",
            "Government Owned",
            "Only 6 built"
        ]
    },
    {
        "answer": "Drum",
        "clues": [
            "Most need a stick",
            "Toms",
            "Beaten",
            "In the ear",
            "The skins",
            "Comes in kits",
            "Tight",
            "Snare",
            "Fingers can do it",
            "Vibration",
            "Yamaha",
            "Jungle news"
        ]
    },
    {
        "answer": "Bank",
        "clues": [
            "Collects signatures",
            "Has a manager",
            "Could contain blood",
            "Fewer of them now",
            "Sends out cards",
            "Clears most nights",
            "Uses red as a warning",
            "Has it's own holidays",
            "Makes regular statements",
            "'Monopoly' player",
            "Takes account of things",
            "England has one?"
        ]
    }
];

// Pick random data
let random = Math.floor(Math.random() * data.length);
let shuffledClues = shuffle(data[random].clues);
answer = data[random].answer;

// Container for the appended frames
const frameContainer = document.getElementById('frameContainer');

// Counter to keep track of iterations
let counter = 0;
let currentRow = null;

for (let i = 0; i < frameCount; i++) {
    // Create a new frame element
    let frame = document.createElement("div");
    frame.className = "frame col-6 col-md-3";

    // Create a clue element
    let clue = document.createElement("div");
    clue.className = "clue";
    clue.innerHTML = shuffledClues[i];

    // Create a cover element
    let cover = document.createElement("div");
    cover.className = "cover";
    cover.innerHTML = "<span class='cover-text'>" + (i + 1) + "</span>";

    // Append the clue and cover elements to the frame
    frame.appendChild(clue);
    frame.appendChild(cover);

    // Increment the counter
    counter++;

    // Check if the counter is a multiple of 4
    if (counter % 4 === 1) {
        // Create a new "row" div for the first frame in each group of 4
        currentRow = document.createElement('div');
        currentRow.classList.add('row');
        frameContainer.appendChild(currentRow);
    }

    // Append the frame to the current row
    if (currentRow !== null) {
        currentRow.appendChild(frame);
    }
}

covers = document.getElementsByClassName("cover");
coverText = document.getElementsByClassName("cover-text");

for (let i = 0; i < covers.length; i++) {
    covers[i].addEventListener("click", function() {
        this.classList.toggle("slideup");
        coverText[i].classList.toggle("fadeout");
    }
    );
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
}

    return array;
}

function checkGuess() {
    let userGuess = document.getElementById("guess").value.toLowerCase();
    if (!userGuess) {
        Toastify({
            text: "Please enter a guess.",
            duration: 1500,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)",
            },
            onClick: function(){} // Callback after click
            }).showToast();
    } else {
        if (answer.toLowerCase() === userGuess) {
            document.getElementById("guess").style.backgroundColor = "green";
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
            Toastify({
            text: "Congratu-well-done.",
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
            }).showToast();
            for (let i = 0; i < covers.length; i++) {
                covers[i].classList.add("slideup");
                coverText[i].classList.add("fadeout");
            }
        } else {
            Toastify({
                text: "I'm afraid that guess is incorrect.",
                duration: 1500,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: false, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #ff5f6d, #ffc371)",
                },
                onClick: function(){} // Callback after click
            }).showToast();
        }
}
}

$(window).on('load', function() {
    $('#exampleModal').modal('show');
});