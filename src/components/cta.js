import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Before you leave,"
      description="Give it a try because... it's Free"
    />
    <Button>Download now</Button>
  </div>
)

export default CallToAction
