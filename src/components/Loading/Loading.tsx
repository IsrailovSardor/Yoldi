import React from 'react'
import Image from "next/image";

import loading from "@/assets/icons/loading2.svg";
import style from "./Loading.module.scss"


function Loading() {
  return (
    <div className={style.loading}>
      <div className={style.loadingContainer}>
        <div className={style.loadingInner}>
          <Image src={loading} alt="loading" width={50} height={50} className={style.isLoading} />
        </div>
      </div>
    </div>
  )
}

export default Loading