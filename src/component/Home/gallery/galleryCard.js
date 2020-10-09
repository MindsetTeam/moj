import React from "react";
import styles from "./index.module.css";

function galleryCard(props) {
  return (
    <div className={styles.card}>
      <div data-toggle="modal" data-target={"#exampleModalCenter" + props.id}>
        <img
          className={styles.thumbnail}
          src="https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        ></img>
        <div className={styles.cardBody}>
          <p>
            Deserunt ex pariatur ullamco reprehenderit nisi ipsum pariatur ipsum
            sint. Ipsum duis occaecat amet ullamco sit. Et voluptate anim Lorem
          </p>
          <div className={styles.cardBodyInfo}>
            <p>
              <i className="fa fa-calendar-alt pt-1 mr-1"></i>1-04-2020
            </p>
            <p>
              {" "}
              <i className="fa fa-images pt-1 mr-1"></i>5 photos
            </p>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        class="modal fade "
        id={"exampleModalCenter" + props.id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Gallery
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-center">
              <p>{props.id}</p>
              <img
                className={styles.mainImg}
                src={"https://robohash.org/" + props.id}
              ></img>
              <p>
                Laborum ipsum laboris Lorem in incididunt nulla culpa nulla
                cillum. Mollit dolor sit nostrud dolore. Cillum minim officia ea
                ad enim dolore veniam non. Nulla adipisicing est culpa
                consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default galleryCard;
