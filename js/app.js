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
            if (id === 1) {
                window.location.href = `summer-product.html?id=${id}`;
            } else if (id === 2) {
                window.location.href = `aura-product.html?id=${id}`;
            }else if (id === 3) {
                window.location.href = `womengrunge-product.html?id=${id}`;
            }else if (id === 4) {
                window.location.href = `wildbunch-product.html?id=${id}`;
            }else if (id === 5) {
                window.location.href = `womenpredict-product.html?id=${id}`;
            }else if (id === 6) {
                window.location.href = `watching-product.html?id=${id}`;
            }else if (id === 7) {
                window.location.href = `visionhotline-product.html?id=${id}`;
            }else if (id === 8) {
                window.location.href = `upside-product.html?id=${id}`;
            }else if (id === 9) {
                window.location.href = `teddy-product.html?id=${id}`;
            }else if (id === 10) {
                window.location.href = `sacrifice-product.html?id=${id}`;
            }else if (id === 11) {
                window.location.href = `retrochild-product.html?id=${id}`;
            }else if (id === 12) {
                window.location.href = `pride-product.html?id=${id}`;
            }else if (id === 13) {
                window.location.href = `maze-product.html?id=${id}`;
            }else if (id === 14) {
                window.location.href = `kissme-product.html?id=${id}`;
            }else if (id === 15) {
                window.location.href = `kinder-product.html?id=${id}`;
            }else if (id === 16) {
                window.location.href = `killinglove-product.html?id=${id}`;
            }else if (id === 17) {
                window.location.href = `killer-product.html?id=${id}`;
            }else if (id === 18) {
                window.location.href = `keepsmile-product.html?id=${id}`;
            }else if (id === 19) {
                window.location.href = `jumphigher-product.html?id=${id}`;
            }else if (id === 20) {
                window.location.href = `ilovepizza-product.html?id=${id}`;
            }else if (id === 21) {
                window.location.href = `iceworld-product.html?id=${id}`;
            }else if (id === 22) {
                window.location.href = `hollystore-product.html?id=${id}`;
            }else if (id === 23) {
                window.location.href = `hollymenu-product.html?id=${id}`;
            }else if (id === 24) {
                window.location.href = `h-ice-product.html?id=${id}`;
            }else if (id === 25) {
                window.location.href = `growpassion-product.html?id=${id}`;
            }else if (id === 26) {
                window.location.href = `secretflower-product.html?id=${id}`;
            }else if (id === 27) {
                window.location.href = `forgivegod-product.html?id=${id}`;
            }else if (id === 28) {
                window.location.href = `confused-product.html?id=${id}`;
            }else if (id === 29) {
                window.location.href = `chaijo.html?id=${id}`;
            }else if (id === 30) {
                window.location.href = `hersmile-product.html?id=${id}`;
            }else if (id === 31) {
                window.location.href = `dating-product.html?id=${id}`;
            }else if (id === 32) {
                window.location.href = `dream-product.html?id=${id}`;
            }
        }
    }))

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
            console.log(this.total);
        },
        remove(itemToRemove) {
            const itemIndex = this.items.findIndex(item => item.id === itemToRemove.id);
            if (itemIndex > -1) {
                this.total -= this.items[itemIndex].price;
                this.items.splice(itemIndex, 1);
                this.quantity--;
                console.log(this.total);
            }
        }
    })
})

// Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.querySelector('#checkoutButton');
    const verifyButton = document.querySelector('#verifyButton');
    const form = document.querySelector('#checkoutForm');

    let emailVerified = false;
    let phoneNumberVerified = false;

    form.addEventListener('input', function() {
        validateForm();
    });

    verifyButton.addEventListener('click', async function() {
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;

        if (validateEmail(email) && validatePhoneNumber(phone)) {
            try {
                const response = await fetch('sendVerificationEmail.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: email })
                });
                if (response.ok) {
                    alert('Email verifikasi telah dikirim. Silakan periksa kotak masuk Anda.');
                    emailVerified = true;
                    phoneNumberVerified = true; // Asumsi nomor WhatsApp terverifikasi jika sudah valid
                    localStorage.setItem('emailVerified', 'true');
                } else {
                    alert('Gagal mengirim email verifikasi.');
                }
            } catch (err) {
                console.log(err);
                alert('Terjadi kesalahan saat mengirim email verifikasi.');
            }
        } else {
            alert('Harap masukkan alamat email dan nomor WhatsApp yang valid.');
        }

        validateForm();
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

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhoneNumber(phone) {
        const re = /^\+?[0-9]{10,15}$/;
        return re.test(phone);
    }

    checkoutButton.addEventListener('click', async function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = new URLSearchParams(formData);

        try {
            const response = await fetch('php/placeOrder.php', {
                method: 'POST',
                body: data,
            });
            const token = await response.text();
            window.snap.pay(token, {
                onSuccess: function(result) {
                    alert("Pembayaran Berhasil!");
                    window.location.href = 'https://drive.google.com/drive/folders/1YSDI6qi3X3cSE9IytoKQCaltHGGUpc8g?usp=sharing';
                },
                onPending: function(result) {
                    alert("Pembayaran Anda tertunda.");
                },
                onError: function(result) {
                    alert("Terjadi kesalahan dalam pembayaran.");
                }
            });
        } catch (err) {
            console.log(err.message);
        }
    });
});

// contoh pesan whatsapp 
const formatMessage = (obj) => {
    return `Data Costumer 
        Nama: ${obj.name}
        Email: ${obj.email}
        No Hp: ${obj.phone}
Data Pesanan
    ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n` )}
    TOTAL: ${rupiah(obj.total)}
    TERIMAKASIH`;
}


const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID',{
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};

