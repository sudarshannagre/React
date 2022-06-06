import React from "react";

function Navbar() {
    const name  = localStorage.getItem("userName").split(":")[1];
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar w/ text</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="list">ListComp</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="login">LoginClass</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Welcome, {name}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;