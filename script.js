document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk mengelola forum (untuk halaman forum.html)
    const postForm = document.getElementById('postForm');
    const postTitle = document.getElementById('postTitle');
    const postContent = document.getElementById('postContent');
    const forumPosts = document.querySelector('.forum-posts');

    if (postForm) {
        postForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Mencegah form agar tidak melakukan refresh halaman

            // Membuat elemen baru untuk post
            const newPost = document.createElement('div');
            newPost.classList.add('post');

            const newPostTitle = document.createElement('h3');
            newPostTitle.textContent = postTitle.value;

            const newPostContent = document.createElement('p');
            newPostContent.textContent = postContent.value;

            // Menambahkan judul dan isi ke dalam elemen post
            newPost.appendChild(newPostTitle);
            newPost.appendChild(newPostContent);

            // Menambahkan post baru ke dalam forum
            forumPosts.appendChild(newPost);

            // Mengosongkan input form setelah submit
            postTitle.value = '';
            postContent.value = '';
        });
    }

    // Fungsi untuk mengelola kuis (untuk halaman quiz.html)
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman formulir secara default

            let score = 0;
            const correctAnswers = {
                q1: 'c', // Misalnya, jawaban benar untuk pertanyaan 1 adalah pilihan C
                q2: 'b', // Misalnya, jawaban benar untuk pertanyaan 2 adalah pilihan B
                q3: 'b', // Misalnya, jawaban benar untuk pertanyaan 3 adalah pilihan B
                q4: 'a', // Misalnya, jawaban benar untuk pertanyaan 4 adalah pilihan A
                q5: 'c', // Misalnya, jawaban benar untuk pertanyaan 5 adalah pilihan C
            };

            const formData = new FormData(quizForm);

            for (let [key, value] of formData.entries()) {
                if (value === correctAnswers[key]) {
                    score++;
                }
            }

            // Menampilkan hasil kepada pengguna
            resultDiv.textContent = 'Anda menjawab dengan benar ' + score + ' dari ' + Object.keys(correctAnswers).length + ' pertanyaan.';
        });
    }
});
