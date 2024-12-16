"use client";
import React, { FC } from "react";

interface IconSendProps {
  width?: string;
  height?: string;
  Dref?: any;
}

const EuroIcon: FC<IconSendProps> = ({
  width = "25px",
  height = "25px",
  Dref,
}) => {
  return (
    <svg
      width={width}
      height={height}
      data-ref={Dref}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <polygon
          fill="currentColor"
          points="511.5,155.688 511.625,183.531 183.625,425.063 0.5,330.422 0.375,305.281 183.5,398.797 	"
        />
        <polygon
          fill="currentColor"
          points="511.844,220.203 512,248.031 184,489.594 0.859,394.938 0.734,369.781 183.875,463.313 	"
        />
        <path
          fill="currentColor"
          d="M162.797,244.844c1.234-0.906,2.672-1.625,4.188-2.172c1.531-0.531,3.172-0.891,4.797-1.047
		c1.625-0.172,3.281-0.125,4.828,0.094c1.547,0.25,3.016,0.672,4.297,1.313c1.281,0.656,2.25,1.438,2.906,2.344
		c0.641,0.875,1,1.844,1.031,2.859s-0.25,2.047-0.844,3.063s-1.5,2.016-2.719,2.922c-1.219,0.875-2.656,1.594-4.188,2.125
		s-3.156,0.906-4.797,1.063s-3.297,0.125-4.859-0.094c-1.547-0.234-3-0.656-4.281-1.313c-1.281-0.641-2.25-1.438-2.906-2.328
		s-0.984-1.875-1.016-2.891c-0.031-1,0.25-2.047,0.844-3.063C160.672,246.719,161.578,245.734,162.797,244.844z"
        />
        <path
          fill="currentColor"
          d="M0,262.203L329.188,22.406L512,113.859L182.719,355.156L0,262.203z M438.875,102.453l-77.75-38.938
		c-4.313,2.359-9.078,4.25-14.031,5.656c-4.969,1.422-10.125,2.328-15.313,2.766c-5.156,0.406-10.313,0.313-15.266-0.297
		s-9.672-1.766-13.984-3.484l-85.219,62.125c8.25-1.797,16.859-2.906,25.625-3.344s17.672-0.188,26.5,0.75
		c8.828,0.969,17.563,2.594,25.969,4.953s16.5,5.422,24.016,9.203s13.969,8.031,19.344,12.594c5.359,4.594,9.656,9.5,12.828,14.594
		c3.188,5.094,5.25,10.375,6.172,15.703s0.703,10.688-0.688,15.953l85.234-62.422c-3.594-2.25-6.344-4.859-8.281-7.703
		s-3.063-5.906-3.344-9.063s0.25-6.422,1.609-9.625C433.656,108.656,435.859,105.469,438.875,102.453 M209.766,308.547
		l85.734-62.766c-8.281,1.813-16.938,2.938-25.719,3.359c-8.813,0.438-17.75,0.172-26.625-0.781
		c-8.844-0.953-17.594-2.609-26.031-4.984c-8.406-2.375-16.5-5.453-24-9.25c-7.531-3.813-13.969-8.094-19.344-12.688
		c-5.344-4.609-9.625-9.531-12.766-14.625c-3.141-5.125-5.172-10.406-6.047-15.719c-0.906-5.328-0.656-10.672,0.781-15.922
		l-85.703,62.469c3.547,2.266,6.266,4.906,8.172,7.766c1.906,2.844,2.984,5.938,3.25,9.125c0.25,3.172-0.313,6.438-1.719,9.688
		s-3.625,6.453-6.688,9.484l77.719,39.516c4.359-2.406,9.156-4.313,14.141-5.734s10.203-2.359,15.391-2.766
		c5.203-0.406,10.391-0.328,15.375,0.313C200.656,305.656,205.438,306.828,209.766,308.547 M254.688,158.688l-11.375-9.156
		l-2.063,0.797c-1.531,0.594-3.031,1.219-4.469,1.891c-1.469,0.656-2.875,1.375-4.234,2.094c-1.359,0.75-2.703,1.5-3.984,2.313
		s-2.516,1.625-3.703,2.5c-4.453,3.25-8.016,6.797-10.672,10.484c-2.641,3.688-4.375,7.516-5.156,11.344s-0.625,7.641,0.516,11.297
		c1.141,3.688,3.25,7.188,6.375,10.406l-7.75,5.656l10.734,5.422l5.938-4.344l0.438,0.234l0.438,0.234l0.438,0.25l0.469,0.25
		l1.156,0.547l1.188,0.547l1.25,0.516l1.344,0.531l-6.188,4.5l10.75,5.438l8.719-6.375c5.594,0.938,11.422,1.313,17.266,1.125
		c5.859-0.156,11.734-0.875,17.422-2.094c5.703-1.219,11.219-2.953,16.375-5.141c5.141-2.188,9.906-4.828,14.094-7.891
		c0.891-0.656,1.75-1.328,2.578-2s1.609-1.375,2.375-2.063c0.75-0.719,1.484-1.438,2.172-2.156c0.688-0.734,1.344-1.469,1.969-2.234
		l0.953-1.172l-15.109-7.625l-1.5,2.281c-0.469,0.719-0.969,1.422-1.531,2.094c-0.547,0.688-1.156,1.359-1.781,2.016
		c-0.656,0.641-1.328,1.281-2.031,1.891c-0.719,0.625-1.484,1.219-2.281,1.813c-2.344,1.688-4.906,3.203-7.688,4.5
		c-2.75,1.313-5.719,2.391-8.781,3.25c-3.078,0.875-6.281,1.5-9.516,1.906c-3.25,0.375-6.547,0.531-9.828,0.422l27.344-20
		l-8.656-6.938L245.219,202.5l-1.313-0.469l-1.281-0.5L241.406,201l-1.203-0.563l-0.453-0.25l-0.453-0.25l-0.422-0.25l-0.406-0.25
		l35.031-25.594l-8.594-6.969l-34.391,25.109c-1.266-2.031-2-4.203-2.234-6.406c-0.25-2.203,0-4.453,0.75-6.703
		c0.719-2.219,1.938-4.438,3.609-6.578c1.672-2.125,3.797-4.156,6.375-6.031c0.891-0.656,1.828-1.281,2.813-1.891
		c0.984-0.594,2.016-1.156,3.078-1.703s2.156-1.078,3.313-1.563c1.141-0.5,2.313-0.953,3.531-1.391L254.688,158.688"
        />
        <path
          fill="currentColor"
          d="M331.156,121.875c1.203-0.875,2.625-1.594,4.125-2.125c1.531-0.531,3.156-0.891,4.781-1.063
		c1.641-0.156,3.281-0.125,4.844,0.094c1.547,0.234,3,0.656,4.297,1.313c1.266,0.625,2.234,1.422,2.891,2.313
		c0.656,0.875,1,1.844,1.031,2.844c0.063,1.016-0.219,2.047-0.813,3.063c-0.578,1-1.469,1.969-2.688,2.859s-2.656,1.609-4.156,2.141
		c-1.531,0.531-3.172,0.891-4.797,1.047c-1.641,0.172-3.266,0.141-4.828-0.094c-1.547-0.234-3-0.672-4.281-1.297
		c-1.281-0.656-2.25-1.438-2.906-2.313s-1.016-1.859-1.063-2.859c-0.031-1,0.25-2.031,0.844-3.047
		C329.031,123.75,329.938,122.781,331.156,121.875z"
        />
      </g>
    </svg>
  );
};

export default EuroIcon;