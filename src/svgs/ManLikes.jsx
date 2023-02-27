import * as React from "react";
import Svg, {
  Mask,
  Path,
  G,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
} from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={360}
    height={408}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={360}
      height={408}
    >
      <Path fill="#D9D9D9" d="M0 0h360v408H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M229.581 322.003C117.124 389.227 27.67 343.916-3 312.857V-89h1545v341.264c-92.01-45.73-173.16-49.16-285.61 57.735-89.97 85.516-202.77 97.749-247.92 93.176-37.698-3.049-121.913-19.664-157.183-61.736-44.089-52.59-97.122-77.171-143.127-100.036-46.005-22.865-136.737-32.011-229.386-24.008-92.649 8.002-108.623 20.578-249.193 104.608Z"
        fill="url(#b)"
      />
      <G clipPath="url(#c)">
        <Path
          d="M93.953 83.039s-58.73 5.709-91.683 9.094l-.442-2.984-12.917 4.442c-1.583.17-8.892 4.69-7.654 12.617l31.688 211.041c1.072 7.238 6.712 12.307 12.777 11.994l10.5-.776-.216-1.46 91.047-21.652c6.032-1.412 9.87-8.079 8.808-15.253l-28.87-195.043c-1.071-7.238-6.802-12.489-13.038-12.02Z"
          fill="#84FFFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="m139.156 304.537-99.56 23.69c-6.714 1.578-13.374-3.86-14.611-11.787L-6.782 104.438c-1.174-7.937 3.561-15.06 10.373-15.55l102.387-7.629c6.235-.469 11.913 4.855 12.984 12.093l28.992 195.868c1.062 7.174-2.776 13.841-8.798 15.317Z"
          fill="#84FFFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M38.753 328.611c-2.707.401-5.439-.233-7.808-1.893-3.29-2.238-5.52-5.996-6.149-10.25l-31.83-211.993c-.629-4.254.416-8.496 2.854-11.582 2.01-2.504 4.746-4.011 7.796-4.268l.013.517c-2.862.229-5.481 1.655-7.438 4.085-2.384 3.013-3.394 7.056-2.72 11.173l31.766 212.003c.61 4.127 2.82 7.757 5.967 9.887 2.576 1.76 5.497 2.366 8.355 1.683l.138.499-.944.139Z"
          fill="#30262A"
        />
        <Path
          d="m114.579 100.683 25.44 171.869c1.372 9.27-2.508 12.18-7.919 13.435l-89.196 21.118c-5.969 1.403-11.638 1.788-13.046-10.332l-6.105-40.815-6.332-42.339-1.005-6.793-5.25-35.038-1.467-9.904-7.597-50.456-.094-.635c-1.72-11.62 2.806-16.247 8.907-16.76l91.662-6.626c8.653.212 10.244 1.403 11.924 12.314l.028.19c-.025.264.012.518.05.772Z"
          fill="#F5F6F7"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="m114.438 99.73.028.191c-26.44 15.657-76.541 45.328-104.83 61.972L2.04 111.437l-.094-.635c-1.72-11.619 2.806-16.247 8.907-16.76l91.662-6.626c8.653.212 10.244 1.404 11.924 12.315Z"
          fill="#fff"
          opacity={0.3}
        />
        <Path
          d="m119.419 133.381 3.937 26.602-99.603 95.975-6.332-42.339 101.998-80.238ZM115.782 108.81l1.851 12.508-101.217 85.508-5.314-35.028 104.68-62.988Z"
          fill="#fff"
          opacity={0.4}
        />
        <Path
          d="m32.934 170.642 70.418-12.369c6.897-1.216 13.406 3.206 14.374 9.746l15.14 102.283c.893 6.031-3.276 11.774-9.559 13.223l-69.864 16.116c-7.092 1.633-14.051-2.786-15.057-9.58L22.692 184.032c-.93-6.286 3.597-12.211 10.242-13.39Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="m51.149 263.712 65.639-15.101a3.263 3.263 0 0 1 3.923 2.598l.056.381c.327 1.768-.77 3.488-2.514 3.876l-65.695 14.72a3.265 3.265 0 0 1-3.923-2.599c-.326-1.768.77-3.488 2.514-3.875ZM49.006 249.236l65.649-15.038c1.807-.397 3.587.767 3.913 2.535l.057.381a3.266 3.266 0 0 1-2.524 3.812l-65.695 14.721c-1.807.397-3.588-.767-3.914-2.536-.326-1.768.77-3.487 2.514-3.875ZM52.54 273.108l65.639-15.101a3.265 3.265 0 0 1 3.923 2.599l.056.381c.326 1.768-.77 3.487-2.514 3.875l-65.696 14.72a3.263 3.263 0 0 1-3.923-2.598c-.326-1.768.78-3.424 2.515-3.876ZM76.64 157.75c-.483-3.692 1.358-7.338 4.705-9.066 3.284-1.719 7.24-1.072 9.93 1.45.524.506.524.506.88-.131 2.024-3.284 4.949-4.82 8.76-4.281 3.613.503 6.057 2.672 7.222 6.198.716 2.23.334 4.427-.58 6.509-1.091 2.627-2.689 4.875-4.557 7.033a55.432 55.432 0 0 1-7.436 7.134c-.34.31-.655.357-1.133.168-4.594-1.915-8.983-4.185-12.802-7.383-1.91-1.599-3.658-3.416-4.591-5.808-.157-.626-.305-1.188-.399-1.823ZM30.145 183.967c-.206-1.397.156-2.424.852-3.371 2.152-2.848 4.232-5.751 6.32-8.591.268-.364.303-.564-.122-.825a849.973 849.973 0 0 1-8.6-6.383c-1.954-1.463-2.374-3.866-1.107-5.741 1.203-1.865 3.64-2.355 5.556-1.147a35.092 35.092 0 0 1 2.46 1.842l6.584 4.93c.362.271.478.189.692-.103 2.143-2.912 4.222-5.815 6.428-8.737 1.446-1.966 3.828-2.383 5.69-1.102 1.936 1.336 2.321 3.939.928 5.832-1.758 2.466-3.588 4.878-5.355 7.281l-1.125 1.529c-.268.364-.25.491.113.762 2.894 2.167 5.85 4.324 8.755 6.555 1.818 1.418 2.228 3.757.962 5.632-1.32 1.947-3.83 2.383-5.783.921-2.894-2.167-5.779-4.271-8.673-6.438-.434-.325-.632-.36-1.007.15-2.142 2.912-4.222 5.815-6.364 8.727-1.884 2.485-5.541 2.118-6.909-.599-.128-.435-.257-.87-.295-1.124Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
      </G>
      <G clipPath="url(#d)">
        <Path
          d="M324.265 254.081a3.071 3.071 0 0 0-.372-1.059c-.62-2.242-1.364-4.11-1.983-5.542-2.046-30.265-6.88-53.866-14.938-72.174-2.355-5.356-3.843-8.718-5.269-10.524-.805-1.059-6.074-1.37-9.483.685-3.595 2.242-5.888 6.912-4.586 9.029 1.611 2.616 2.417 4.484 4.462 9.279 8.43 20.052 12.273 45.148 14.07 63.456-1.116 2.802-2.293 6.601-3.347 8.593-.558 1.121-2.293 5.044-1.24 5.729.868.623 3.719-1.806 4.897-3.176 1.054 8.283 6.198 19.865 5.331 2.367.247 1.743 1.673 11.583 3.842 10.275 1.922-1.121 1.24-8.158.806-11.085h.062c.62 2.927 2.417 9.902 3.905 8.22 1.859-2.117 1.302-9.839 1.302-9.839s.991 9.902 3.471 7.784c1.673-1.37-.372-9.278-.93-12.018Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M319.12 202.83c-8.925-35.744-18.098-41.224-18.098-41.224s-10.351-8.594-31.115-12.081c-.868-.187-1.798-.311-2.728-.436-.805-.125-1.611-.187-2.417-.311-3.161-.374-6.384-.374-9.669-.187-1.921.124-3.781.373-5.578.623-14.07 2.304-23.925 14.073-28.078 20.051-6.508 7.535-12.769 8.469-18.223 9.839-13.884 3.425-23.863-9.901-29.813-14.322l-5.765 8.344-5.764 8.283c.31.186 7.314 8.905 16.115 15.132 14.008 9.901 32.293 7.597 43.512 5.542-.868 11.645-1.302 24.847-2.294 39.419 0 0 24.297-10.151 76.796 3.176 0 0 1.178-20.052.434-41.225 4.153 14.696 6.074 33.565 8.987 34.624 3.843 1.37 15.868 1.183 15.868 1.183s6.694-.685-2.17-36.43Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M189.144 183.65s-6.57-9.839-13.202-12.828c-6.694-3.051-10.909-.498-10.909-.498l-7.128-2.865s-1.054 27.276 17.541 22.481c1.487-.436 13.698-6.29 13.698-6.29Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="m158.959 153.199 6.818 39.543c.434 2.616 2.913 4.297 5.516 3.799l18.285-3.737a4.633 4.633 0 0 0 3.657-5.355l-6.694-38.983c-.434-2.553-2.851-4.234-5.331-3.798l-18.408 3.176c-2.603.373-4.277 2.802-3.843 5.355Z"
          fill="#84FFFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M163.05 153.261c.684 0 1.239-.557 1.239-1.245 0-.688-.555-1.246-1.239-1.246-.685 0-1.24.558-1.24 1.246s.555 1.245 1.24 1.245Z"
          fill="#100B47"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M154.744 168.331s-2.417-5.293 2.417-7.472c6.136-2.74 16.487-.312 12.583 1.494-3.471 1.619-8.864 2.678-8.864 2.678s13.822-2.616 13.388.436c-.434 3.051-12.396 5.168-12.396 5.168s13.698-1.245 12.396 1.495c-1.363 2.74-12.21 4.733-12.21 4.733s13.326-1.931 11.714 1.245c-1.673 3.176-8.739 2.802-11.776 3.301-2.851.498-4.153-1.184-4.401-4.048 0 0-1.921-2.678-1.611-4.546.124-.747-.682-1.308-.806-1.806-.248-.872-.434-2.678-.434-2.678Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M296.001 244.678c-.062 2.864-17.293 3.985-38.553 3.3-21.26-.685-38.305-3.612-38.181-6.476.062-2.865 17.169-4.546 38.491-3.861 21.198.685 38.305 4.172 38.243 7.037Z"
          fill="#007EA2"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="m263.088 145.166-2.107-6.788-.62-1.993-3.595-11.645-.496 11.583-.31 6.975-.062 2.179c-.062 1.495-.991 1.806-2.045 3.114-.434.498-3.285 3.736-.062 5.168 4.029 1.806 11.591-.934 14.442-4.483 0 0-4.463-1.868-5.145-4.11Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M247.531 120.444s-.744 2.802 0 6.351c.744 3.55 4.277-5.168 4.277-5.168l-4.277-1.183Z"
          fill="#30262A"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M268.295 128.415c-.186-.25-.434-.499-.682-.623-.248-5.667-3.781-10.4-8.678-11.022-5.64-.748-10.908 4.172-11.838 11.022-.868 6.85 2.975 12.952 8.615 13.7 5.393.685 10.413-3.737 11.653-10.026.062 0 .062-.062.124-.062 1.054-.748 1.426-2.055.806-2.989Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M256.767 128.601c-.062-.062-.062-.062-.124-.186 0-.125.062-.187.186-.25.061 0 1.611-.311 2.417 1.37.062.125 0 .25-.124.312s-.186 0-.31-.125c-.744-.872-1.922-1.121-1.983-1.121.061.063 0 0-.062 0ZM256.833 131.998c.363.099.767-.224.902-.721.135-.498-.049-.982-.413-1.082-.363-.099-.767.223-.902.721s.05.982.413 1.082ZM249.08 127.979c-.062 0-.062-.063-.124-.125-.062-.124 0-.249.062-.311.062-.063 1.116-.934 2.108.249.062.062.062.187 0 .311-.062.062-.124.062-.248.062-.744-.498-1.736-.249-1.736-.186h-.062ZM250.44 131.151c.373-.047.624-.5.561-1.012-.064-.512-.419-.888-.792-.841-.374.046-.625.5-.561 1.011.063.512.418.889.792.842Z"
          fill="#080435"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M266.436 114.777s5.144-4.297 3.966-7.411c-1.177-3.176-6.632-2.179-8.739-1.681-2.107.498-2.479 4.297-.744 6.725 1.674 2.429 5.517 2.367 5.517 2.367ZM258.502 382.425c-2.48-.125-4.773 1.12-5.951 3.3-.557.996-1.425 1.931-2.603 2.429-3.719 1.556-14.504 2.989-10.475 6.538 2.294 2.055 13.202.748 16.24.748 3.099 0 5.95 1.37 8.243-.748 1.364-1.245 1.24-5.168.868-8.469-.31-2.366-2.417-4.172-4.835-3.861-.372.063-.744.063-1.053.063h-.434ZM296.435 381.117s-.124 5.542-3.843 7.099c-3.719 1.557-14.504 2.989-10.475 6.539 2.293 2.055 13.202.747 16.239.747 3.099 0 5.95 1.37 8.244-.747 2.541-2.242 0-13.576 0-13.576s-2.666 1.37-5.021 1.308c-3.409-.125-5.144-1.37-5.144-1.37Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="m313.976 378.065-22.624-125.417c-.31-1.494-1.177-8.095-2.603-8.469-1.612-.436-4.277-.871-7.5-1.183 0 0-14.07-1.806-29.937-1.806-8.987 0-16.797.685-20.578 1.121-1.674.187-3.037 1.495-3.223 3.176-.434 3.363-.496 10.462 1.549 25.158 2.914 21.609 14.07 100.57 15.93 111.095.682 3.736 1.425 6.102 6.818 6.85l7.19-.125c5.888.872 8.119-5.48 8.181-9.528l-3.161-82.2 25.723 83.072c1.735 5.605 6.756 9.403 12.458 9.528l2.479.062c5.889.062 10.351-5.418 9.298-11.334Z"
          fill="#84FFFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="m266.87 306.016-8.864-27.151c-1.983-6.103-6.136-11.209-11.59-14.323l.371-.622c5.641 3.238 9.856 8.469 11.901 14.758l8.863 27.151-.681.187Z"
          fill="#020202"
        />
        <Path
          d="M277.097 152.016s4.338-3.986-.868-5.418c-2.046-.56-5.083-5.667-7.934-5.231-2.851.436-4.524 16.565-15.991 21.547 0 0-2.789 2.49 1.797 2.366 4.525-.062 22.996-13.264 22.996-13.264Z"
          fill="#84FFFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M252.303 162.976s-5.702-5.667-4.71-10.96c.992-5.293-1.922-9.777-3.347-7.411-1.426 2.367-3.037.934-3.409 3.924-.31 2.989 4.091 17.685 8.119 17.685 4.029 0 3.347-3.238 3.347-3.238ZM253.605 164.097s3.719 1.681 2.356 5.604c-1.364 3.986.557 5.543.557 5.543s-4.462.249-5.02-4.048c-.62-4.172 2.107-7.099 2.107-7.099Z"
          fill="#84FFFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M251.498 164.097s-4.711 1.619-4.897 4.67c-.186 3.052 2.479 3.799 3.409 1.993.93-1.806 2.913-5.418 2.913-5.418l-1.425-1.245Z"
          fill="#84FFFF"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M270.278 114.777c-7.004-4.857-17.912-1.183-21.383 1.619-3.409 2.802-1.55 9.341-1.55 9.341s1.612-3.487 2.913-4.359c1.364-.872 5.207-.312 8.678 0 3.409.311 2.727 4.67 2.727 4.67s.682 6.227-.62 7.411c-.434.373-1.673.747-3.347.934-1.487-.499-3.347.186-5.516-.187-2.108-.374-4.711-.561-4.711-.561s-2.293 1.37-.682 6.477c1.612 5.168.248 2.179-1.735 7.037-1.922 4.857 2.169 3.798 1.239 7.659-.929 3.799 2.666 6.103 7.376 3.612 4.711-2.491 1.55-2.553 4.215-5.978s.682-5.543 3.719-7.971c3.037-2.429 3.099-6.726 3.099-6.726.372-.747-.682-5.542-.682-5.542s-.31-2.553 1.054-4.048c3.533 3.301.93 7.037.93 7.037 4.896-.56 8.305-8.033 8.305-8.033s2.975-7.473-4.029-12.392Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M249.638 135.949s3.223.872 6.694.561c0 0-.496 3.238-4.091 2.615-2.045-.373-2.603-3.176-2.603-3.176ZM322.033 242.311s-10.784 1.183-16.425 0c0 0-.744 2.865.434 4.235 0 0 12.954.996 15.991 0 0 0 2.232-2.18 0-4.235Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M315.153 248.974c2.17 0 3.967-1.806 3.967-3.985v-.623c0-2.179-1.797-3.985-3.967-3.985-2.169 0-3.966 1.806-3.966 3.985v.623c0 2.179 1.735 3.985 3.966 3.985Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M250.01 188.57c.753 0 1.364-.613 1.364-1.37 0-.757-.611-1.37-1.364-1.37-.753 0-1.364.613-1.364 1.37 0 .757.611 1.37 1.364 1.37ZM250.01 205.321c.753 0 1.364-.613 1.364-1.37 0-.756-.611-1.37-1.364-1.37-.753 0-1.364.614-1.364 1.37 0 .757.611 1.37 1.364 1.37ZM250.01 225.124c.753 0 1.364-.613 1.364-1.37 0-.757-.611-1.37-1.364-1.37-.753 0-1.364.613-1.364 1.37 0 .757.611 1.37 1.364 1.37Z"
          fill="#30262A"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <Path
          d="m296.311 204.449.682-.186c-2.603-11.209-7.128-21.609-7.19-21.734l-.62.312c.062.124 4.525 10.524 7.128 21.608ZM221.808 202.581c.744-12.454 6.942-28.458 7.004-28.583l-.62-.249c-.062.187-6.26 16.253-7.004 28.832h.62Z"
          fill="#30262A"
        />
      </G>
      <G clipPath="url(#e)">
        <Path
          d="M162.147 94a6.85 6.85 0 0 1 4.608-6.496c2.696-.957 5.637 0 7.402 2.266.343.453.343.453.686 0 1.912-2.317 4.314-3.173 7.157-2.317 2.696.806 4.314 2.77 4.804 5.64.294 1.813-.245 3.475-1.176 4.986-1.128 1.914-2.598 3.475-4.265 4.935a42.735 42.735 0 0 1-6.471 4.684c-.294.201-.539.201-.882 0-3.284-2.015-6.373-4.281-8.922-7.202-1.274-1.46-2.402-3.072-2.843-5.036-.049-.503-.147-.956-.098-1.46Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
      </G>
      <G clipPath="url(#f)">
        <Path
          d="M200.147 121a6.848 6.848 0 0 1 4.608-6.496c2.696-.957 5.637 0 7.402 2.266.343.453.343.453.686 0 1.912-2.317 4.314-3.173 7.157-2.317 2.696.806 4.314 2.77 4.804 5.641.294 1.812-.245 3.474-1.176 4.985-1.128 1.914-2.598 3.475-4.265 4.935a42.735 42.735 0 0 1-6.471 4.684c-.294.201-.539.201-.882 0-3.284-2.015-6.373-4.281-8.922-7.202-1.274-1.46-2.402-3.072-2.843-5.036-.049-.503-.147-.956-.098-1.46Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
      </G>
      <G clipPath="url(#g)">
        <Path
          d="M198.147 78a6.85 6.85 0 0 1 4.608-6.496c2.696-.957 5.637 0 7.402 2.266.343.453.343.453.686 0 1.912-2.317 4.314-3.173 7.157-2.317 2.696.806 4.314 2.77 4.804 5.64.294 1.813-.245 3.475-1.176 4.986-1.128 1.914-2.598 3.475-4.265 4.935a42.738 42.738 0 0 1-6.471 4.684c-.294.201-.539.201-.882 0-3.284-2.014-6.373-4.28-8.922-7.202-1.274-1.46-2.402-3.072-2.843-5.036-.049-.503-.147-.956-.098-1.46Z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="c">
        <Path
          fill="#fff"
          transform="rotate(-8.42 616.25 188.78)"
          d="M0 0h138.422v242.545H0z"
        />
      </ClipPath>
      <ClipPath id="d">
        <Path fill="#fff" transform="translate(154 105)" d="M0 0h172v291H0z" />
      </ClipPath>
      <ClipPath id="e">
        <Path fill="#fff" transform="translate(162 87)" d="M0 0h25v21H0z" />
      </ClipPath>
      <ClipPath id="f">
        <Path fill="#fff" transform="translate(200 114)" d="M0 0h25v21H0z" />
      </ClipPath>
      <ClipPath id="g">
        <Path fill="#fff" transform="translate(198 71)" d="M0 0h25v21H0z" />
      </ClipPath>
      <LinearGradient
        id="b"
        x1={769.5}
        y1={-89}
        x2={769.5}
        y2={404}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.224} stopColor="#091D5C" />
        <Stop offset={1} stopColor="#0A298C" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
