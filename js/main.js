const New = document.querySelectorAll('.opt1');
New.forEach(opt1 => {
    // console.log(opt1);
    opt1.innerText = 'New site';
});

const Old = document.querySelectorAll('.opt2');
Old.forEach(opt2 => {
    // console.log(opt2);
    opt2.innerText = 'Old site';
});

let opt1 = 'New site';
let opt2 = 'Old site';

const body = document.querySelector('body');
function Logout(){
    body.innerHTML = `
        <header id="header">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <!-- Brand -->
            <a class="navbar-brand" href="#">
                <img src="./img/bus.png" width="30px">
            </a>
            <a class="navbar-brand" href="#">
                <h5>Bus Reservation</h5>
            </a>

            <!-- Toggler/collapsibe Button -->
            <button type="button" id="nav-toggle" class="navbar-toggler collapsed" data-toggle="collapse"
                data-target="#collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Reserve now</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">packages and Promotion</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <h1 style="color: green; text-align: center;">You have successfully logout</h1>
    <a href="login.html"><div class="floatingActionButtonLogin">Login</div></a>
    `;
}