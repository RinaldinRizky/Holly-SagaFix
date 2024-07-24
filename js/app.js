document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Summer Adventure Design', img: 'summer.png', price: 400000},
            { id: 2, name: 'Aura Glow Design', img: 'auraglow.png', price: 350000},
            { id: 3, name: 'Women Grunge Design', img: 'womengrunge.png', price: 200000},
            { id: 4, name: 'Wild Bunch Design', img: 'wildbunch.png', price: 600000},
            { id: 5, name: 'Women Can Predict Design', img: 'wcp.png', price: 100000},
            { id: 6, name: 'Watching Design', img: 'watching.png', price: 250000},
            { id: 7, name: 'Hot-Line Vision Design', img: 'vision.png', price: 460000},
            { id: 8, name: 'Up Side Design', img: 'upside.png', price: 270000},
            { id: 9, name: 'Teddy Angel Design', img: 'teddy.png', price: 260000},
            { id: 10, name: 'Sacrifice Design', img: 'sacrifice.png', price: 700000},
            { id: 11, name: 'Retro Child Design', img: 'retro.png', price: 165000},
            { id: 12, name: 'Pride Risk Future Design', img: 'pride.png', price: 110000},
            { id: 13, name: 'Maze Runner Design', img: 'mazerunner.png', price: 320000},
            { id: 14, name: 'Kiss Me Design', img: 'kissme.png', price: 220000},
            { id: 15, name: 'Kinder World Design', img: 'kinder-world.png', price: 280000},
            { id: 16, name: 'Killing Love Design', img: 'killing.png', price: 330000},
            { id: 17, name: 'Killer Design', img: 'killer.png', price: 360000},
            { id: 18, name: 'Keep Smiling Design', img: 'keepsmiling.png', price: 100000},
            { id: 19, name: 'Jump Higher Design', img: 'jumphigher.png', price: 150000},
            { id: 20, name: 'I Love Pizza Design', img: 'ilovepizza.png', price: 230000},
            { id: 21, name: 'Ice World Club Design', img: 'iceworldclub.png', price: 350000},
            { id: 22, name: 'Holly Store Design', img: 'hollystore.png', price: 370000},
            { id: 23, name: 'Holly Menu Design', img: 'hollymenu.png', price: 340000},
            { id: 24, name: 'H-Ice Design', img: 'h-ice.png', price: 300000},
            { id: 25, name: 'Grow With Passion Design', img: 'grow.png', price: 310000},
            { id: 26, name: 'A Flower Secret Design', img: 'flower.png', price: 320000},
            { id: 27, name: 'Forgive Me God Design', img: 'forgive.png', price: 280000},
            { id: 28, name: 'Confused Design', img: 'confused.png', price: 345000},
            { id: 29, name: 'Chaijo Design', img: 'chaijo.png', price: 300000},
            { id: 30, name: 'Her Smile Design', img: 'hersmile.png', price: 100000},
            { id: 31, name: 'Dating Design', img: 'dating.png', price: 360000},
            { id: 32, name: 'Dream Design', img: 'dreamfix.png', price: 370000},
        ],
        goToProductPage(id) {
            const productPages = {
                1: 'summer-product.html',
                2: 'aura-product.html',
                3: 'womengrunge-product.html',
                4: 'wildbunch-product.html',
                5: 'womenpredict-product.html',
                6: 'watching-product.html',
                7: 'visionhotline-product.html',
                8: 'upside-product.html',
                9: 'teddy-product.html',
                10: 'sacrifice-product.html',
                11: 'retrochild-product.html',
                12: 'pride-product.html',
                13: 'maze-product.html',
                14: 'kissme-product.html',
                15: 'kinder-product.html',
                16: 'killinglove-product.html',
                17: 'killer-product.html',
                18: 'keepsmile-product.html',
                19: 'jumphigher-product.html',
                20: 'ilovepizza-product.html',
                21: 'iceworld-product.html',
                22: 'hollystore-product.html',
                23: 'hollymenu-product.html',
                24: 'h-ice-product.html',
                25: 'growpassion-product.html',
                26: 'secretflower-product.html',
                27: 'forgivegod-product.html',
                28: 'confused-product.html',
                29: 'chaijo.html',
                30: 'hersmile-product.html',
                31: 'dating-product.html',
                32: 'dream-product.html'
            };
            window.location.href = `${productPages[id]}?id=${id}`;
        }
    }));
    
    document.addEventListener('DOMContentLoaded', () => {
        const checkoutButton = document.querySelector('#checkout-btn');
        const verifyButton = document.querySelector('#verify-btn');
        const form = document.querySelector('#checkoutForm');
    
        let emailVerified = false;
    
        form.addEventListener('input', function() {
            validateForm();
        });
    
        verifyButton.addEventListener('click', function() {
            const email = document.querySelector('input[name="email"]').value;
    
            fetch('sendVerificationEmail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Verification email sent.') {
                    alert('Verification email sent. Please check your inbox.');
                    localStorage.setItem('emailVerified', 'true');
                    emailVerified = true;
                    validateForm();
                } else {
                    alert('Failed to send verification email: ' + data.error);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    
        function validateForm() {
            const allFilled = Array.from(form.elements).every(element => element.value.trim() !== '');
            const isEmailVerified = localStorage.getItem('emailVerified') === 'true';
    
            if (allFilled && isEmailVerified) {
                checkoutButton.disabled = false;
                checkoutButton.classList.remove('disabled');
            } else {
                checkoutButton.disabled = true;
                checkoutButton.classList.add('disabled');
            }
        }
    
        checkoutButton.addEventListener('click', async function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            const data = new URLSearchParams(formData);
    
            try {
                const response = await fetch('/php/placeOrder.php', {
                    method: 'POST',
                    body: data,
                });
                const token = await response.text();
                window.snap.pay(token, {
                    onSuccess: function(result) {
                        alert("Pembayaran Sukses!");
                        console.log(result);
                        sendProductFiles();
                    },
                    onPending: function(result) {
                        alert("Menunggu Pembayaran!");
                        console.log(result);
                    },
                    onError: function(result) {
                        alert("Pembayaran Gagal!");
                        console.log(result);
                    },
                    onClose: function() {
                        alert('Anda menutup popup tanpa menyelesaikan pembayaran');
                    }
                });
            } catch (error) {
                console.error('Error:', error);
            }
        });
    
        function sendProductFiles() {
            const items = JSON.parse(document.querySelector('input[name="items"]').value);
            items.forEach(item => {
                // Kirim file sesuai dengan item yang dibeli
                // Implementasikan fungsi ini sesuai kebutuhan
                console.log(`Mengirim file untuk produk: ${item.name}`);
            });
        }
    });
    

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            const existingItem = this.items.find(item => item.id === newItem.id);
            if (existingItem) {
                alert('Produk ini sudah ada di keranjang!');
                return;
            }
            this.items.push(newItem);
            this.quantity++;
            this.total += newItem.price;
        },
        remove(itemToRemove) {
            const itemIndex = this.items.findIndex(item => item.id === itemToRemove.id);
            if (itemIndex > -1) {
                this.total -= this.items[itemIndex].price;
                this.items.splice(itemIndex, 1);
                this.quantity--;
            }
        }
    });
});

