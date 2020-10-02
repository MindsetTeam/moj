import React from "react";
import styles from "./index.module.css";

function galleryCard() {
  return (
    <div className={styles.card}>
      <img src="https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"></img>
      <div className={styles.cardBody}>
        <p>
          Deserunt ex pariatur ullamco reprehenderit nisi ipsum pariatur ipsum
          sint. Ipsum duis occaecat amet ullamco sit. Et voluptate anim Lorem
        </p>
        <div className={styles.cardBodyInfo}>
          <p>
            <i class="fa fa-calendar-alt pt-1 mr-1"></i>1-04-2020
          </p>
          <p>
            {" "}
            <i class="fa fa-images pt-1 mr-1"></i>5 photos
          </p>
        </div>
      </div>
    </div>
  );
}

export default galleryCard;
