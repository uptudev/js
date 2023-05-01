import React from "react";
import "../stylesheets/pages/about.scss"

const About = () => {
    return (
        <>
            <hr className="hr"/>
            <h2 id="helloworld" className="title">Hi! My name is <span className="about-span">u</span>
                <span className="about-span">p</span>
                <span className="about-span">t</span>
                <span className="about-span">u</span>
                .</h2>
            <p className="smaller title-break">(not really but I'm not telling you it because you shouldn't use your real name
                online)</p>
            <hr className="hr"/>
            <div>
                <div className="box">
                    <p>
                        I have been coding in some aspect for over a decade now as a hobbyist, but primarily using OOP
                        languages
                        like Java and C#.
                        Recently I've forayed into web development, and have taken to it quickly given my prior experience
                        tinkering with web dev as a teen.
                        I've also learned Rust over the last few months, and now use it as my language of choice;
                        having C-like syntax, low-level control, clang-like LLVM compiling, and WASM support combined with
                        the
                        borrow checker makes for a very powerful language.
                    </p>
                    <p>
                        I am also a musician of about <strong className="strong-accent">17</strong> years.
                        I started playing guitar at <strong className="strong-accent">6</strong>, bass at somewhere around <strong className="strong-accent">10</strong> years old, and keyboards/synthesis at around <strong className="strong-accent">12</strong> years old.
                        As of recent, I haven't been making much music (never mind finishing any) because I've been focusing primarily on programming;
                        a fundamental flaw of switching my daily driver to Debian was that I have to reboot into Windows in order to use Ableton Live.
                        For the most part, I produce music that fits in the <strong className="strong-accent"><em>Drum n' Bass</em></strong> and <strong className="strong-accent"><em>Jungle</em></strong> genres, but have made projects for pretty much any genre under the sun.
                        As far as music that I listen to, I tend to listen to different genres depending on my mood.
                        Typically, I listen to Jazz, Drum n' Bass, Metal, or Rap, although I've been known to enjoy much more varied categories;
                        I also have playlists for Blues/Bluegrass/Folk, Ambient, and other genres I like, but they're for more niche moods.
                    </p>

                </div>
                <div className="box">
                    <h3>Languages I Know</h3>
                    <p className="smaller sideline">(All experience listed is amateur; I haven't had the pleasure of
                        working as a dev yet.)</p>
                    <ul className="p language-grid">
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Java</strong> - <em>10 years;</em></p>
                                
                                <p className="single_line lang_body">
                                My first programming language learned. Little
                                uptu thought that Java was going to overtake C/C++ because of that sweet sweet JVM.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Rust</strong> - <em>Learning;</em></p>
                                
                                <p className="single_line lang_body">
                                I'm currently using
                                rust as my daily driver, as it provides some nifty low-level
                                support, and polling has shown that most programmers love Rust
                                more than their own mothers. Currently, I'm developing games
                                using the <a href="https://bevyengine.org/">Bevy</a> framework.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>HTML/CSS/JS</strong> - <em>~5 years;</em></p>
                                
                                <ul className="lang_body">
                                    <li className="smallist"><p className="single_line">
                                        I learned bits and pieces of HTML around 15 years ago, with markup
                                        languages being rather simple to learn.
                                    </p></li>
                                    <li className="smallist"><p className="single_line">
                                        I learned CSS primarily to modify a
                                        stylesheet on a subreddit I moderated, which I was migrating to use Naut with
                                        some tweaks.
                                    </p>
                                    </li>
                                    <li className="smallist"><p className="single_line">
                                        I have less experience with JavaScript, although I have been
                                        actively learning TypeScript recently to code this website, primarily
                                        using React as a framework.
                                    </p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>C#</strong> - <em>~5 years;</em></p>
                                
                                <p className="single_line lang_body">
                                    I wanted to try out Visual Studio (at the time
                                    I was unaware of the fledgling VS Code as an Eclipse user), and decided
                                    learning C# would be a good intro to the C family. I quickly learned that I had already
                                    learned C# well beforehand by learning Java, with C# being a more syntactically
                                    stripped-down version of the same general underlying concepts, feeling more like Java
                                    than C/C++. I have made a few Unity projects, and coding in it practically comes as a
                                    second nature coming from a Java background.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Python</strong> - <em>~5 years;</em></p>
                                
                                <p className="single_line lang_body">
                                Taught me how much I took curly-brace
                                syntax for granted with other languages! I have a love-hate relationship with the
                                language, as although the lack of braces makes scripting easier and faster in it, I
                                find myself making indentation errors often that become crippling where they
                                wouldn't be in other languages. I prefer my scripts in Lua or TypeScript, personally.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Bash</strong> - <em>~5 years;</em></p>
                                
                                <p className="single_line lang_body">
                                Shell scripts can be immensely
                                useful for automating many aspects of Linux development, and I personally
                                have a deploy script ready to go on my desktop, along with many other small
                                utility scripts. I am most familiar with the Debian family of distros and
                                their commands.
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Lua</strong> - <em>~1 month;</em></p>
                                
                                <p className="single_line lang_body">
                                I learned it on a weekend to
                                make <a href="https://github.com/uptudev/hamisNice">a mod</a> for one of
                                my favourite games, Noita. I can't even say I know the language, as it
                                was a trial-by-fire where I was too busy trying to figure out Noita's
                                poorly-documented mod API to actually note anything about it otherwise.
                                Unfortunately the aforementioned API issues left a bad taste in my
                                mouth, and I haven't touched Lua since (beyond NeoVim configuration).
                                </p>
                            </div>
                        </li>
                        <br/>
                        <li className="biglist">
                            <div>
                                <p className="single_line lang_header"><strong>Go</strong> - <em>Looking Into;</em></p>
                                
                                <p className="single_line lang_body">
                                I originally wanted to
                                learn C++ as my next language after learning TypeScript, however
                                I've noticed Go getting some traction as of recent as a potential
                                successor to C++, and may look to it as a possible replacement for
                                most purposes.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h3>About this website</h3>
                    <p>
                        I recently decided to make a portfolio website to showcase my web dev skills (and host WASM
                        verisons of
                        games I make), with the decision between using <a href="https://yew.rs/">Yew</a>, <a
                        href="https://vuejs.org/">Vue.js 3</a>, and <a href="https://react.dev/">React</a> being more
                        difficult
                        than expected.
                        At the end of the day, I ended up using React, with the prototype of my website having been
                        originally
                        written in Vue.js (and thus requiring rewriting).
                        React's interoperability with TypeScript via .tsx files allows for Rust-esque static typing,
                        which makes
                        my functions feel more like Rust than vanilla ECMAScript.
                    </p>
                </div>
                <div className="box">
                    <h3>Contact Me</h3>
                    <p id="email" className="single_line contact">
                        <strong>
                            Email
                        </strong>
                        : <a href="mailto:uptu@uptu.dev">
                        uptu@uptu.dev
                    </a>
                    </p>
                    <p id="github" className="single_line contact">
                        <strong>
                            Github
                        </strong>
                        : <a href="https://github.com/uptudev/">
                        uptudev
                    </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
  