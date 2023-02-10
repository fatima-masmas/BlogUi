import React from "react";
import "./singlePost.css";

    export default function SinglePost() {
        return (
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <img src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg " alt="" className="singlePostImg" />
                    <h1 className="singlePostTitle">
                    Wie sehen Katzen aus
                    
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">Author: <b>Fatima</b></span>
                        <span className="singlePostDate">1 hour ago</span>
                    </div>
                    <p className="singlePostDesc">
                    Hauskatzen gehören zur Familie der Katzenartigen und sind Raubtiere.

In der Familie der Katzen gibt es zwei große Gruppen: Die Kleinkatzen, zu denen unsere Hauskatzen und zum Beispiel auch die Geparden gehören, und Großkatzen wie Löwen und Tiger.
                    Jeder weiß, wie ein Katze aussieht: Die Vierbeiner besitzen einen runden Kopf mit zwei kleinen Ohren, lange Tasthaare an der Schnauze, einen langen Schwanz und ein weiches, dichtes Fell.

Katzen können ihre Krallen einziehen. Wenn sie angreifen, können sie sie blitzschnell vorschnellen lassen und ihre Beute damit packen - oder einen Menschen kratzen!

Katzen haben das typische Raubtiergebiss eines Fleischfressers. Sie haben lange Eckzähne, mit denen sie ihre Beute festhalten und töten.

Katzen können sich sehr geschickt bewegen und klettern und sehr gut hören und sehen - auch in der Dunkelheit. Es gibt heute viele verschiedene Katzen-Rassen:

Sie werden in Langhaar-, Halblanghaar- und Kurzhaarrassen eingeteilt. Ihr Fell kann viele verschiedene Farben haben und auch
                    </p>
                </div>
                </div>
        )
    }