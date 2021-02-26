import "./styles.css";

export default function App() {
  return (
    <>
      <nav class="navbar">
        <div class="max-width">
          <div class="logo">
            <a href="#"> CHECK<span>POINT</span> </a>
          </div>
          <ul class="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Register & Sign In</a>
            </li>
          </ul>
        </div>
      </nav>

      <section class="form">
        <h1 class="titles"> Register & Sign In </h1>
        <div class="inscrit-sign">
          <div class="inscription">
            <p class="title"> Create your account</p>

            <div class="Name">
              <label>FullName</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div class="Email">
              <label>Email</label>
              <input type="text" placeholder="exemple@gmail.com" required />
            </div>

            <div class="Date">
              <label>Date de naissance</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <select>
                <option>Janvier</option>
                <option>Fevrier</option>
                <option>Mars</option>
              </select>
              <select>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
              </select>
            </div>

            <div class="password">
              <label>Password</label>
              <input type="password" placeholder="*******" required />
            </div>
            <div class="">
              <label>Repeat Password</label>
              <input type="password" placeholder="*******" required />
            </div>

            <div class="formation">
              <div class="Formation">
                <label>Formation</label>
                <select>
                  <option>Fullstack JS</option>
                  <option>DevOps</option>
                  <option>Front-end</option>
                </select>
              </div>
            </div>
            <div class="checkbox">
              <label class="lab">
               
                  <input type="checkbox"/>
                
                I Understand Terms &amp; Conditions
              </label>
            </div>
            <div class="button">
              <button type="button" class="submit">
                Sign up
              </button>
            </div>
          </div>
          <div class="connexion">
            <p class="title"> Have an account?</p>
            <div class="Name">
              <label>Email</label>
              <input type="text" placeholder="exemple@gmail.com" required />
            </div>

            <div class="password">
              <label>Password</label>
              <input type="password" placeholder="*******" required />
            </div>
            <div class="checkbox">
              <label class="lab">
               
                  <input type="checkbox"/>
                
                  Save
              </label>
            </div>
            <div class="button">
              <button type="button" class="submit">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="max-width">
          <div class="footer-content">
            <div class="rs">
              <ul class="footer-ul">
                <li>
                  <a class="footer-icon" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a class="footer-icon" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a class="footer-icon" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
