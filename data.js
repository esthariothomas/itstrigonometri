var defaultThreads = [
    {
        id: 1,
        title: "Trigonometry Question",
        author: "Oik",
        date: Date.now(),
        content: "Nyatakan sudut-sudut berikut dalam satuan derajad: a)1/2 pi rad",
        comments: [
            {
                author: "Tuti",
                date: Date.now(),
                content: "90 derajat"
            },
            {
                author: "Anjani",
                date: Date.now(),
                content: "180 derajat"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}