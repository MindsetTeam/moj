import React, { Component } from "react";
import styles from "./index.module.css";

import GalleryCard from "./galleryCard";

export class index extends Component {
  render() {
    return (
      <div className={styles.galleryContainer + " mb-2"}>
        <div className={styles.contentHeader}>
          <div className={styles.filter + " row"}>
            <div className="col-md-4 col-12">បណ្ណាល័យរូបភាព</div>
            <div className="col-md-4 col-12">
              <input type="text"></input>
            </div>
            <div className="col-md-4 col-12">តំរៀបតាមលំដាប់</div>
          </div>
          <div className={styles.category}>
            <div>
              <p>សនិ្នបាត</p>
              <p>សិក្ខាសាលា</p>
              <p>វគ្គបណ្ដុះបណ្ដាល</p>
              <p>កម្រងរូបភាពផ្សេងៗ</p>
              <p style={{ borderRight: "0" }}>ទាំងអស់</p>
            </div>
          </div>
        </div>
        <div className={styles.contentBody}>
          <div className={styles.galleries}>
            <GalleryCard></GalleryCard>
            <GalleryCard></GalleryCard>
            <GalleryCard></GalleryCard>
          </div>
          <div className={styles.pagination}></div>
        </div>
        <div className={styles.contentfooter}></div>
      </div>
    );
  }
}

export default index;
