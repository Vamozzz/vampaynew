"use client";

import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import { purple } from "@mui/material/colors";

interface AccordionItem {
  id: number;
  heading: string;
  content: string;
  disabled?: boolean;
}

interface DynamicAccordionProps {
  accordionData: AccordionItem[];
}

const BasicAccordion: React.FC<DynamicAccordionProps> = ({ accordionData }) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className=" p-10 lg:p-36">
      <p className="features_title">FAQs</p>
      {accordionData.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          sx={{ marginTop: 2, boxShadow:'none', border:'none' }}
          className="shadow-md before:hidden"
        >
          <AccordionSummary
            expandIcon={
              expanded === item.id ? (
                <IndeterminateCheckBoxRoundedIcon style={{ color: "#8875FF" }} />
              ) : (
                <AddIcon />
              )
            }
            sx={{paddingTop:1, paddingBottom:1,}}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
          >
            <Typography>{item.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#F7F8FC" }}>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default BasicAccordion;
