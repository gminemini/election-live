import React from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { DISPLAY_FONT } from "../styles"
import { partyColor } from "../models/information"

/**
 * @param {{ party: IParty, constituencySeats: number, partyListSeats: number, maxSeats: number }} props
 */
const PartyStatsRow = props => {
  const totalSeats = props.constituencySeats + props.partyListSeats
  const barWidth = `${((totalSeats / props.maxSeats) * 100).toFixed(2)}%`

  return (
    <article css={{ position: "relative", height: 96, padding: "0.5rem 0" }}>
      <h3 css={{ margin: 0, fontSize: "1.5rem", fontFamily: DISPLAY_FONT }}>
        {props.party.name}
      </h3>
      <p css={{ margin: 0 }}>
        <VisuallyHidden> ทั้งหมด </VisuallyHidden>
        <div
          css={{
            backgroundColor: " #eee",
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            position: "absolute",
            right: 0,
            top: 10,
            textAlign: "center",
          }}
        >
          <span css={{ fontSize: "1rem", top: 4, position: "relative" }}>
            {totalSeats}
          </span>
        </div>
      </p>
      <p css={{ margin: 0 }}>
        สส.เขต {props.constituencySeats}{" "}
        <VisuallyHidden> ที่นั่ง </VisuallyHidden>
        สส.ปาร์ตี้ลิสต์ {props.partyListSeats}{" "}
        <VisuallyHidden> ที่นั่ง</VisuallyHidden>
      </p>
      <div
        css={{ height: 5, background: partyColor(props.party) }}
        style={{ width: barWidth }}
      />
    </article>
  )
}

export default PartyStatsRow
