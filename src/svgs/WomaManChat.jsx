import * as React from "react";
import Svg, { Mask, Path, G, Rect } from "react-native-svg";

const WomanManChat = (props) => (
  <Svg
    width={360}
    height={431}
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
      height={431}
    >
      <Path fill="#D9D9D9" d="M0 0h360v431H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#fff" d="M0 0h360v24H0z" />
      <Path
        d="M18.25 6.013V16h-1.648V7.968l-2.44.827v-1.36l3.89-1.422h.198Zm9.96 4.177v1.626c0 .78-.077 1.445-.232 1.996-.15.547-.37.992-.656 1.334a2.576 2.576 0 0 1-1.033.752c-.396.159-.84.239-1.333.239-.392 0-.756-.05-1.093-.15a2.672 2.672 0 0 1-.903-.472 2.82 2.82 0 0 1-.69-.828 4.63 4.63 0 0 1-.438-1.223 8.023 8.023 0 0 1-.15-1.648V10.19c0-.783.077-1.444.232-1.982.155-.542.376-.982.663-1.32.288-.341.63-.59 1.026-.744a3.69 3.69 0 0 1 1.34-.233c.396 0 .76.05 1.093.15.338.096.638.249.903.459.269.21.497.483.683.82.192.333.338.736.438 1.21.1.47.15 1.016.15 1.64Zm-1.647 1.859V9.943a7.07 7.07 0 0 0-.069-1.046 3.102 3.102 0 0 0-.205-.772 1.54 1.54 0 0 0-.328-.52 1.156 1.156 0 0 0-.45-.293 1.593 1.593 0 0 0-.568-.096c-.256 0-.483.05-.684.15-.2.096-.369.25-.506.465-.137.214-.241.497-.314.848a6.647 6.647 0 0 0-.103 1.264v2.106c0 .4.023.754.069 1.06.045.305.114.567.205.786.09.214.2.392.328.533.132.136.282.237.451.3.173.064.362.096.567.096.26 0 .49-.05.69-.15.201-.1.37-.26.507-.479.136-.223.239-.512.307-.868.069-.355.103-.781.103-1.278Zm3.247 3.13c0-.255.087-.469.26-.642.173-.178.408-.267.704-.267.3 0 .536.09.704.267.173.173.26.387.26.643 0 .255-.087.47-.26.642-.168.173-.403.26-.704.26-.296 0-.53-.087-.704-.26a.873.873 0 0 1-.26-.642Zm.007-5.824c0-.255.087-.469.26-.642.173-.178.408-.267.704-.267.3 0 .535.09.704.267.173.173.26.387.26.642 0 .256-.087.47-.26.643-.169.173-.403.26-.704.26-.296 0-.531-.087-.704-.26a.873.873 0 0 1-.26-.643Zm10.439 3.097v1.313h-7.178l-.055-.992 4.293-6.726h1.32l-1.429 2.447-2.468 3.958h5.517Zm-1.244-6.405V16h-1.648V6.047h1.648Zm8.846 4.143v1.626c0 .78-.078 1.445-.233 1.996-.15.547-.369.992-.656 1.334a2.576 2.576 0 0 1-1.032.752c-.397.159-.841.239-1.333.239a3.82 3.82 0 0 1-1.094-.15 2.67 2.67 0 0 1-1.593-1.3 4.634 4.634 0 0 1-.437-1.223 8.03 8.03 0 0 1-.15-1.648V10.19c0-.783.077-1.444.232-1.982.155-.542.376-.982.663-1.32.287-.341.629-.59 1.025-.744a3.691 3.691 0 0 1 1.34-.233c.397 0 .761.05 1.094.15.337.096.638.249.902.459.27.21.497.483.684.82.191.333.337.736.437 1.21.1.47.15 1.016.15 1.64Zm-1.648 1.859V9.943c0-.396-.023-.745-.068-1.046a3.098 3.098 0 0 0-.205-.772 1.54 1.54 0 0 0-.328-.52 1.155 1.155 0 0 0-.451-.293 1.594 1.594 0 0 0-.568-.096c-.255 0-.483.05-.683.15-.2.096-.37.25-.506.465-.137.214-.242.497-.315.848a6.646 6.646 0 0 0-.102 1.264v2.106c0 .4.023.754.068 1.06.046.305.114.567.205.786.091.214.2.392.328.533.133.136.283.237.451.3.174.064.363.096.568.096.26 0 .49-.05.69-.15.2-.1.37-.26.506-.479.137-.223.24-.512.308-.868.068-.355.102-.781.102-1.278Z"
        fill="#091D5C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M294.941 6h-1.059c-.584 0-1.058.504-1.058 1.125v9.75c0 .621.474 1.125 1.058 1.125h1.059c.585 0 1.059-.504 1.059-1.125v-9.75c0-.621-.474-1.125-1.059-1.125Zm-6 2.625H290c.585 0 1.059.504 1.059 1.125v7.125c0 .621-.474 1.125-1.059 1.125h-1.059c-.585 0-1.059-.504-1.059-1.125V9.75c0-.621.474-1.125 1.059-1.125Zm-3.882 2.625H284c-.585 0-1.059.504-1.059 1.125v4.5c0 .621.474 1.125 1.059 1.125h1.059c.585 0 1.059-.504 1.059-1.125v-4.5c0-.621-.474-1.125-1.059-1.125Zm-4.941 2.25h-1.059c-.585 0-1.059.504-1.059 1.125v2.25c0 .621.474 1.125 1.059 1.125h1.059c.584 0 1.058-.504 1.058-1.125v-2.25c0-.621-.474-1.125-1.058-1.125ZM310 8.492c2.322 0 4.555.932 6.237 2.603a.313.313 0 0 0 .454-.004l1.211-1.277a.362.362 0 0 0-.003-.499c-4.416-4.42-11.382-4.42-15.798 0a.362.362 0 0 0-.003.5l1.211 1.276a.313.313 0 0 0 .454.004c1.683-1.671 3.916-2.603 6.237-2.603Zm0 4.154c1.276 0 2.506.495 3.451 1.39.128.126.33.123.454-.007l1.21-1.277a.36.36 0 0 0 .098-.252.36.36 0 0 0-.103-.25c-2.879-2.797-7.338-2.797-10.217 0a.36.36 0 0 0-.004.502l1.209 1.277c.125.13.326.133.454.006a5.02 5.02 0 0 1 3.448-1.39Zm2.424 2.795a.355.355 0 0 1-.099.252l-2.092 2.206A.321.321 0 0 1 310 18a.32.32 0 0 1-.232-.101l-2.093-2.206a.354.354 0 0 1 .01-.5 3.469 3.469 0 0 1 4.63 0 .348.348 0 0 1 .109.248Z"
        fill="#091D5C"
      />
      <Path
        opacity={0.4}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M326.667 7h16.37c.92 0 1.666.746 1.666 1.667v6.666c0 .92-.746 1.667-1.666 1.667h-16.37A1.667 1.667 0 0 1 325 15.333V8.667c0-.92.746-1.667 1.667-1.667ZM324 8.667A2.667 2.667 0 0 1 326.667 6h16.37a2.667 2.667 0 0 1 2.666 2.667v6.666A2.667 2.667 0 0 1 343.037 18h-16.37A2.667 2.667 0 0 1 324 15.333V8.667ZM348 12c0 .925-.516 1.759-1.31 2.118V9.882c.794.36 1.31 1.194 1.31 2.118Z"
        fill="#091D5C"
      />
      <Rect
        x={325.973}
        y={8.118}
        width={17.757}
        height={7.765}
        rx={1.333}
        fill="#091D5C"
      />
      <Path
        d="M-568.419 322.003C-680.876 389.227-770.33 343.916-801 312.857V-89H744v341.264c-92.01-45.73-173.158-49.16-285.614 57.735-89.965 85.516-202.763 97.749-247.916 93.176l-.332-.027c-37.757-3.053-104.219-8.427-156.851-61.709C.5 288-43.835 264.268-89.84 241.403c-46.005-22.865-136.737-32.011-229.386-24.008-92.649 8.002-108.623 20.578-249.193 104.608Z"
        fill="#091D5C"
      />
      <Path
        d="M68.154 236.252h-4.242v-47.286l2.797 3.143 1.445 44.143Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M78.782 238.871s-19.019.333-25.358.381c-.7 0-1.212-1.001-1.212-1.715 0-.714 1.025-1.571 1.724-1.571 6.2.047 24.846.286 24.846.286.7 0 1.258.571 1.258 1.285 0 .762-.559 1.334-1.258 1.334Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M53.097 241.204c.233-1.429 1.445-2.333 2.844-2.333 1.398 0 2.843.952 2.843 2.381 0 1.809-1.771 3.047-3.17 3.047-1.398 0-2.796-1.333-2.517-3.095ZM73.421 241.204c.233-1.429 1.445-2.333 2.844-2.333 1.398 0 2.843.952 2.843 2.381 0 1.809-1.771 3.047-3.17 3.047-1.398 0-2.796-1.333-2.517-3.095ZM57.572 191.871s-.7 3.095 6.34 4.095c7.039 1 10.069-4.095 10.069-4.095H57.572Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M74.54 187.109c.093-8.667-1.258-43.762-13.332-46.048-4.754-.905-21.535-3.095-23.82 4.238-3.869 12.572 6.62 43.714 6.62 43.714s.932 3.286 4.381 3.667c3.45.381 45.496 1.619 45.87 0 1.63-6.381-13.706-3.809-19.719-5.571ZM106.098 236.156s1.026 6.905 3.776 10.429c1.818 2.333 6.852 6.905 3.263 8.428-2.844 1.239-8.344-4.238-10.115-5.571-1.772-1.333-4.476-3.905-3.87-6.095 1.212-4.524.84-10.238.84-10.238l6.106 3.047ZM86.147 230.823s-1.398 6.857 0 11.143c.932 2.809 4.056 8.905.187 9.095-3.077.143-6.387-6.905-7.599-8.809-1.212-1.905-2.843-5.239-1.538-7.096 2.704-3.809 4.242-9.285 4.242-9.285l4.708 4.952Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M88.105 235.632c36.965-25.19 35.147-47.285 30.02-55.904-5.967-10.048-15.383-17.953-29.834-21.476-3.869-.953-7.505-1.477-10.581-1.81-4.429-.476-8.251 3.143-8.158 7.714l.326 12.857h-.046c6.153-.142 24.892 1.81 29.787 12 1.025 2.096-23.867 32-22.935 37.334 1.119 6.047 7.785 11.762 11.42 9.285Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M102.415 239.442c4.242 0 7.645-3.619 7.412-7.952-.559-9.619-2.331-26.048-7.785-38.429-3.123-7.048-8.064-13.429-14.73-19-5.034-4.19-11.047-7.952-17.853-11.19-11.374-5.334-19.532-4.572-19.532-4.572l-6.2 9.333c.094 0-1.724 9.429 11.375 17.81 7.225 4.619 21.815 7.476 27.782 19.429 4.288 8.523 5.92 19.857 6.433 27.809.28 3.81 3.356 6.714 7.039 6.762h6.059ZM93.978 125.109s7.645 12 10.349 29.762c1.818 11.761-19.159-1.953-19.159-1.953l-.932-24.571 9.742-3.238Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="m53.33 123.632-12.213-2.333s5.221-11.286 27.969-11c2.005 0 4.009.476 5.967 1 1.445.333 2.75.81 4.008 1.381 10.955 4.524 16.176 13.619 16.176 13.619s-1.259 2.238-4.056 3.714c2.145 7.762 3.263 18.239 3.683 31.953 0 0-8.064 14.524-44.61 11.714-4.056-.333-9.883-.857-7.878-7.571 3.123-10.715 6.2-30.524 10.954-42.477Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M41.117 121.299c-.28 1.095 2.61 2.953 6.433 4.143 3.87 1.19 7.226 1.238 7.552.095.28-1.095-2.61-2.952-6.433-4.143-3.869-1.142-7.272-1.238-7.551-.095Z"
        fill="#007EA2"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M108.429 218.156h.233c0-.095-.606-8.714-3.217-18.476-2.424-9-7.085-20.857-15.709-26.143l-.14.191c4.708 2.904 11.234 9.714 15.616 26 2.611 9.714 3.217 18.333 3.217 18.428ZM89.55 234.537h.233c-.094-13.428-4.382-23.809-4.429-23.905l-.233.096c.094.143 4.335 10.428 4.429 23.809Z"
        fill="#020202"
      />
      <Path
        d="M80.693 111.966s-3.123-1.667-3.45-3.524c-.326-1.905-1.584-1.429-2.237-2-.653-.524 1.771-5.381 1.771-5.381l6.992-1.857-1.538 8.762-1.538 4Z"
        fill="#30262A"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M66.569 110.299a3.956 3.956 0 0 0 3.496-2.143l2.19-4.095.654-1.19 3.729-6.953-1.212 7.476-.746 4.477-.233 1.285a2.066 2.066 0 0 0 1.445 2.334c.466.952 1.025 2.857-1.259 3.381-2.703.619-6.759-1.905-8.064-4.572Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M72.256 103.966v.143c-.047 2.428 2.377 3.809 2.377 3.809l.746-4.476c-.746-.381-1.818-.762-2.517-.524-.327.095-.56.429-.606 1.048Z"
        fill="#30262A"
      />
      <Path
        d="M69.785 95.156c.14-.095.28-.19.42-.238.979-4 4.055-6.81 7.458-6.524 3.823.381 6.573 4.572 6.107 9.429-.466 4.809-3.916 8.429-7.738 8.048-3.496-.334-6.06-3.858-6.153-8.143-.653-.81-.7-1.953-.094-2.572Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M80.087 103.156s-2.377-.19-4.662-1.238c0 0-.42 2.381 2.145 2.762 1.445.238 2.517-1.524 2.517-1.524Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M77.523 97.3c.047 0 .093-.049.093-.096.047-.095 0-.19-.046-.238-.047-.048-1.072-.667-2.098.285-.046.048-.093.143 0 .239.047.047.14.047.233 0 .793-.429 1.678-.239 1.725-.239a.143.143 0 0 0 .093.048ZM76.236 99.641c-.281-.036-.47-.383-.42-.774.048-.392.315-.68.596-.643.28.037.469.383.42.775-.048.391-.315.679-.596.642ZM80.604 100.389c-.278-.054-.445-.413-.372-.8.073-.387.358-.657.636-.602.278.054.444.413.372.8-.073.387-.358.657-.636.602Z"
        fill="#30262A"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M74.027 91.251c5.175 1.81 8.484 7 8.158 12.62 0 .333-.047.666-.093 1 0 0-3.636.476-4.196 4.047-.186 1.143 2.844 3.334 3.077 3.286 1.725-.619 6.48-4.333 6.246-12.667-.233-8.333-2.797-14.666-10.162-15.666-7.365-.953-6.852 4.19-6.852 4.19s1.119 2.238 3.822 3.19Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M75.053 91.347s-.14.047-.373.19c-.84.524-2.937 2.143-3.543 4.762-.746 3.286 2.191 5.667 1.119 8.191-1.119 2.523-3.123-.619-4.988-.381-1.911.285-3.17-.762-2.937-4.524.233-3.81 1.912-12.524 6.293-12.095l4.429 3.857Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M83.583 108.204c.047 0 .094-.048.094-.048 1.025-5.428-.42-10.905-2.285-13.952-1.538-2.476-3.216-3.572-4.381-4.048-1.259-.524-2.145-.476-2.191-.476-.047 0-.093.048-.093.095 0 .048.046.096.093.096.046 0 3.59-.239 6.433 4.428 1.864 3 3.263 8.429 2.284 13.81-.047.047-.047.095.046.095-.046 0-.046 0 0 0ZM67.5 101.204c.094 0 .094-.048.094-.095-1.305-3.667.093-9.667 1.632-11.381 1.491-1.667 3.496-.524 3.589-.477.047 0 .093 0 .093-.047 0-.048 0-.095-.046-.095 0 0-2.191-1.238-3.823.523-1.585 1.715-2.983 7.81-1.678 11.572h.14Z"
        fill="#000"
      />
      <Path
        d="M84.655 101.537c.047 0 .093-.047.093-.095s.094-2.619-.28-5.429c-.512-3.81-1.63-6.19-3.262-7.095-3.87-2.143-7.086-.19-7.132-.19-.047.047-.047.095-.047.095a.143.143 0 0 0 .093.048s.793-.477 2.051-.715c1.166-.19 2.937-.19 4.895.905 3.776 2.095 3.45 12.286 3.45 12.381.046.048.093.095.14.095Z"
        fill="#000"
      />
      <Path
        d="m29.044 261.204-.373-.048c-.326-.047-.512-.619-.512-1.238l3.03-83.857 5.78-3.19-7.039 86.666c0 1-.42 1.715-.886 1.667Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="m202.777 261.204.373-.048c.326-.047.513-.619.513-1.238l-3.03-83.857-5.781-3.19 7.039 86.666c0 1 .42 1.715.886 1.667Z"
        fill="#30262A"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M9.886 172.013c20.417-3.428 61.438-5.761 108.752-5.761 47.313 0 88.288 2.333 108.751 5.761h13.752v4.953c0 5.905-54.866 10.666-122.503 10.666-67.638 0-122.504-4.761-122.504-10.666v-4.953H9.886Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M118.591 182.68c-67.656 0-122.503-4.776-122.503-10.667s54.846-10.666 122.503-10.666c67.657 0 122.503 4.775 122.503 10.666s-54.846 10.667-122.503 10.667Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M206.32 179.871c.046 0 .046 0 0 0 10.348-.905 18.552-2 24.472-3.143.187-.048.327-.238.28-.429-.047-.19-.186-.333-.373-.286-5.92 1.191-14.124 2.239-24.379 3.143-.187 0-.327.191-.327.381 0 .191.187.334.327.334Z"
        fill="#444092"
      />
      <Path
        d="M206.32 179.871c.046 0 .046 0 0 0Zm0 0c10.348-.905 18.552-2 24.472-3.143.187-.048.327-.238.28-.429-.047-.19-.186-.333-.373-.286-5.92 1.191-14.124 2.239-24.379 3.143-.187 0-.327.191-.327.381 0 .191.187.334.327.334Z"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M56.407 151.109c.513 0 .933-.191 1.26-.524.791-.81.558-2.381-.514-3.476-.606-.619-1.398-1-2.144-1-.513 0-.932.19-1.258.523-.793.81-.56 2.381.512 3.477.653.619 1.445 1 2.145 1Zm-1.351-4.477c.606 0 1.258.334 1.771.858.886.904 1.119 2.142.513 2.762-.233.238-.513.333-.886.333-.606 0-1.258-.333-1.771-.857-.886-.905-1.119-2.143-.513-2.762.186-.191.513-.334.886-.334Z"
        fill="#EC865C"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
        opacity={0.5}
      />
      <Path
        d="M41.677 122.013c0-.523 11.887.524 12.306 3.619 2.471 17.62 14.964 25.858 24.426 27.62 0 0 8.81-2.858 11.607-1.524 2.797 1.333 5.361 5.238 3.45 4.762-1.911-.477-4.195-1.762-4.195-1.762s4.754 2.952 3.589 3.809c-1.165.81-5.267-1.809-5.267-1.809s5.36 4 4.008 4.428c-1.351.429-5.407-2.619-5.407-2.619s4.848 3.905 3.263 4.381c-1.585.476-3.962-3.238-5.127-2.428-.84.619-2.657 2.857-4.662 2.762-12.166.428-38.923-7.905-37.99-41.239Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="m89.27 154.871.14-.191c-.046-.048-1.258-1.095-2.237-.809l.047.238c.839-.286 2.004.714 2.05.762ZM87.593 156.871l.14-.191c-.047-.048-1.213-1.095-2.658-.952v.238c1.352-.095 2.47.905 2.518.905ZM86.194 158.632l.14-.19c-.047-.048-1.492-1.286-2.517-.905l.093.238c.886-.333 2.284.857 2.284.857Z"
        fill="#000"
      />
      <Path
        d="M82.325 163.632h7.551l5.315-16.142a2.861 2.861 0 0 1 2.703-2h28.948c.932 0 1.585.952 1.305 1.809l-5.873 17.905c-.187.571-.7.952-1.306.952H81.533a.845.845 0 0 1-.84-.857c0-.905.746-1.667 1.632-1.667Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M112.484 155.252c0-.667-.745-.953-1.445-.953-.652 0-1.771.762-1.771 1.714 0 1.048.792 1.143 1.445 1.143.746 0 1.771-1.047 1.771-1.904Z"
        fill="#DAEBE8"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M94.725 154.537c0-.047 1.398-5.381 2.284-7 .885-1.619 1.958-1.952 2.004-1.952l-.046-.191c-.047 0-1.166.334-2.098 2.048-.886 1.667-2.238 6.857-2.33 7.048l.186.047ZM90.576 163.728c1.025 0 1.305-.476 1.305-.476l2.19-6.715-.186-.047-2.19 6.714s-.234.381-1.166.381v.143h.047Z"
        fill="#44393D"
      />
      <Path
        d="M99.856 263.927s20.138-3.19 26.431-22.047c-8.484-13.143-13.285-29.381-13.285-46.857 0-42.905 37.338-72.524 78.965-72.524 60.272 0 80.923 34.809 80.923 77.714s-47.734 73.286-89.361 73.286c-16.641 0-31.278-5.714-42.838-15.286-7.039 5.667-19.625 10.714-40.835 5.714Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M182.364 282.784c20.837 0 43.492-7.714 60.599-20.666 18.879-14.286 29.321-33.191 29.321-53.191 0-23.476-6.06-42.095-18.04-55.333-13.751-15.238-35.101-22.952-63.489-22.952-20.837 0-40.555 7.19-55.425 20.285-15.523 13.619-24.053 32.381-24.053 52.762 0 17.191 4.568 33.429 13.192 46.905-6.247 18.048-25.685 21.381-25.918 21.381l-2.89.476 2.843.667c11.887 2.809 28.575 4.095 41.021-5.476 12.12 9.904 26.897 15.142 42.839 15.142Zm8.437-151c28.016 0 49.132 7.572 62.65 22.572 11.747 13 17.714 31.381 17.714 54.571 0 19.667-10.255 38.191-28.854 52.286-16.922 12.81-39.343 20.429-59.947 20.429-15.849 0-30.532-5.238-42.466-15.191l-.373-.286-.373.286c-11.28 8.953-26.43 8.476-37.944 6.095 5.687-1.571 19.345-6.904 24.38-21.809l.093-.286-.14-.238c-8.624-13.333-13.192-29.429-13.192-46.524 0-20.047 8.391-38.524 23.68-51.905 14.777-12.904 34.169-20 54.772-20Z"
        fill="#30262A"
      />
      <Path
        d="M158.777 206.784h59.2c1.306 0 3.31-1.38 3.497-2.714.373-2.714-2.191-3.476-3.497-3.476l-59.2 1.333c-1.305 0-2.377 1.096-2.377 2.429 0 1.333 1.072 2.428 2.377 2.428ZM166.189 195.451h44.703c.979 0 2.517-1.095 2.611-2.19.279-2.191-1.632-2.81-2.611-2.81l-44.703 1.095c-.979 0-1.772.858-1.772 1.953-.046 1.047.793 1.952 1.772 1.952Z"
        fill="#fff"
      />
      <Path
        d="M201.451 214.81c31.791 0 60.319 22.619 60.319 55.381 0 13.333-3.682 25.761-10.162 35.809 4.848 14.381 20.184 16.857 20.184 16.857-16.175 3.81-25.824 0-31.231-4.333-8.81 7.333-19.998 11.714-32.724 11.714-31.791 0-68.29-23.238-68.29-56 .093-32.809 15.895-59.428 61.904-59.428Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M208.816 337.238c12.167 0 23.494-4 32.724-11.571 9.463 7.333 22.235 6.333 31.325 4.19l2.191-.524-2.191-.333c-.14-.048-15.01-2.571-19.811-16.333 6.619-10.286 10.115-22.715 10.115-35.857 0-15.619-6.526-29.905-18.413-40.334-11.374-10-26.43-15.524-42.372-15.524-21.676 0-37.991 5.905-48.526 17.524-9.137 10.095-13.752 24.334-13.752 42.286 0 15.286 7.972 29.714 22.375 40.667 13.099 9.904 30.393 15.809 46.335 15.809Zm32.677-12.667-.28.239c-9.136 7.571-20.37 11.571-32.443 11.571-15.756 0-32.864-5.857-45.776-15.619-14.217-10.762-22.049-24.952-22.049-39.952 0-17.715 4.569-31.715 13.565-41.667 10.349-11.429 26.431-17.238 47.874-17.238 15.709 0 30.579 5.428 41.813 15.286 11.653 10.238 18.086 24.333 18.086 39.666 0 13.048-3.496 25.334-10.068 35.524l-.14.19.046.191c3.823 11.429 14.311 15.476 18.646 16.667-8.81 1.809-20.37 2.19-28.994-4.667l-.28-.191Z"
        fill="#30262A"
      />
      <Path
        d="M170.546 284h59.201c1.305 0 3.309-1.381 3.496-2.714.373-2.715-2.191-3.476-3.496-3.476l-59.201 1.333c-1.305 0-2.377 1.095-2.377 2.428 0 1.334 1.072 2.429 2.377 2.429ZM177.911 272.619h44.704c.979 0 2.517-1.095 2.61-2.19.28-2.191-1.631-2.81-2.61-2.81l-44.704 1.095c-.978 0-1.771.858-1.771 1.953 0 1.095.793 1.952 1.771 1.952Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M353.695 321.476a2.385 2.385 0 0 0-.28-.809 32.263 32.263 0 0 0-1.492-4.238c-1.538-23.143-5.174-41.191-11.234-55.191-1.771-4.095-2.89-6.666-3.962-8.047-.606-.81-4.568-1.048-7.132.523-2.704 1.715-4.428 5.286-3.449 6.905 1.212 2 1.818 3.429 3.356 7.095 6.339 15.381 9.23 34.572 10.581 48.572-.839 2.143-1.724 5.047-2.517 6.571-.419.857-1.725 3.857-.932 4.381.652.476 2.797-1.381 3.682-2.428.793 6.333 4.662 15.19 4.009 1.809.187 1.333 1.259 8.857 2.89 7.857 1.445-.857.933-6.238.606-8.476h.047c.466 2.238 1.818 7.572 2.937 6.286 1.398-1.619.979-7.524.979-7.524s.745 7.571 2.61 5.952c1.259-1.095-.28-7.095-.699-9.238Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M349.826 282.286c-6.713-27.334-13.612-31.524-13.612-31.524s-7.784-6.571-23.4-9.238c-.653-.143-1.352-.238-2.051-.333-.606-.096-1.212-.143-1.818-.239-2.378-.285-4.802-.285-7.272-.142-1.445.095-2.844.285-4.195.476-10.582 1.762-17.994 10.762-21.117 15.333-4.894 5.762-9.602 6.476-13.704 7.524-10.442 2.619-17.947-7.571-22.422-10.952l-4.335 6.333-4.335 6.333c.233.143 5.5 6.81 12.119 11.572 10.535 7.571 24.287 5.809 32.724 4.238-.653 8.905-.979 19-1.725 30.143 0 0 18.273-7.762 57.756 2.428 0 0 .885-15.333.326-31.524 3.123 11.238 4.568 25.667 6.759 26.477 2.89 1.142 11.933.952 11.933.952s5.035-.524-1.631-27.857Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M252.075 267.619s-4.941-7.524-9.929-9.809c-5.034-2.334-8.204-.381-8.204-.381l-5.361-2.191s-.792 20.857 13.192 17.191c1.119-.334 10.302-4.81 10.302-4.81Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="m229.374 244.333 5.127 30.239a3.503 3.503 0 0 0 4.149 2.904l13.751-2.857c1.865-.381 3.077-2.19 2.751-4.095l-5.081-29.762c-.327-1.952-2.145-3.238-4.009-2.905l-13.845 2.429c-1.911.238-3.17 2.095-2.843 4.047Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M232.451 244.381a.943.943 0 0 1-.933-.952c0-.526.418-.953.933-.953.514 0 .932.427.932.953a.942.942 0 0 1-.932.952Z"
        fill="#100B47"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M226.204 255.905s-1.818-4.048 1.818-5.714c4.615-2.096 12.399-.239 9.463 1.142-2.611 1.239-6.666 2.048-6.666 2.048s10.395-2 10.069.333c-.327 2.334-9.323 3.953-9.323 3.953s10.301-.953 9.323 1.143c-1.026 2.095-9.184 3.619-9.184 3.619s10.023-1.477 8.811.952c-1.259 2.429-6.573 2.143-8.857 2.524-2.144.381-3.123-.905-3.31-3.095 0 0-1.445-2.048-1.212-3.477.093-.571-.513-1-.606-1.381-.233-.666-.326-2.047-.326-2.047Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M332.438 314.286c-.046 2.19-13.005 3.047-28.994 2.524-15.989-.524-28.808-2.762-28.715-4.953.047-2.19 12.913-3.476 28.948-2.952 15.942.524 28.808 3.19 28.761 5.381Z"
        fill="#007EA2"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M307.686 238.191 306.101 233l-.466-1.524-2.704-8.904-.372 8.857-.234 5.333-.046 1.667c-.047 1.143-.746 1.381-1.538 2.381-.327.381-2.471 2.857-.047 3.952 3.03 1.381 8.717-.714 10.861-3.429 0 0-3.356-1.428-3.869-3.142Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M295.986 219.286s-.56 2.143 0 4.857c.559 2.714 3.216-3.952 3.216-3.952l-3.216-.905Z"
        fill="#30262A"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M311.602 225.381c-.14-.19-.326-.381-.513-.476-.186-4.333-2.843-7.953-6.526-8.429-4.242-.571-8.204 3.191-8.903 8.429-.653 5.238 2.237 9.905 6.479 10.476 4.056.524 7.831-2.857 8.764-7.667.046 0 .046-.047.093-.047.792-.572 1.072-1.524.606-2.286Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M302.932 225.524c-.047-.048-.047-.048-.094-.143 0-.095.047-.143.14-.19.047 0 1.212-.239 1.818 1.047.047.095 0 .191-.093.238-.093.048-.14 0-.233-.095-.56-.667-1.445-.857-1.492-.857.047.048 0 0-.046 0ZM303.305 226.779c.273.076.412.446.311.827-.102.38-.406.627-.679.551-.273-.076-.412-.446-.311-.827.102-.38.406-.627.679-.551ZM297.151 225.048c-.046 0-.046-.048-.093-.096-.046-.095 0-.19.047-.238.046-.047.839-.714 1.585.191.046.047.046.143 0 .238-.047.048-.094.048-.187.048-.559-.381-1.305-.191-1.305-.143h-.047ZM297.996 226.033c.281-.036.548.252.596.644.048.391-.141.738-.422.774-.281.036-.548-.253-.596-.644-.048-.392.141-.738.422-.774Z"
        fill="#080435"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M310.203 214.952s3.869-3.285 2.984-5.666c-.886-2.429-4.988-1.667-6.573-1.286s-1.865 3.286-.559 5.143c1.258 1.857 4.148 1.809 4.148 1.809ZM304.237 419.619c-1.865-.095-3.59.857-4.475 2.524-.42.762-1.073 1.476-1.958 1.857-2.797 1.191-10.908 2.286-7.878 5 1.725 1.571 9.929.571 12.213.571 2.331 0 4.475 1.048 6.2-.571 1.025-.952.932-3.952.652-6.476-.233-1.81-1.818-3.191-3.636-2.953-.279.048-.559.048-.792.048h-.326ZM332.765 418.619s-.093 4.238-2.89 5.429c-2.797 1.19-10.908 2.285-7.878 5 1.725 1.571 9.929.571 12.213.571 2.331 0 4.475 1.048 6.2-.571 1.911-1.715 0-10.381 0-10.381s-2.005 1.047-3.776 1c-2.564-.095-3.869-1.048-3.869-1.048Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="m345.957 416.286-17.015-95.905c-.233-1.143-.885-6.19-1.957-6.476-1.212-.333-3.217-.667-5.641-.905 0 0-10.581-1.381-22.515-1.381-6.759 0-12.632.524-15.476.857a2.755 2.755 0 0 0-2.424 2.429c-.326 2.571-.373 8 1.166 19.238 2.191 16.524 10.581 76.905 11.98 84.952.512 2.857 1.072 4.667 5.127 5.238l5.408-.095c4.428.667 6.106-4.19 6.153-7.286l-2.378-62.857 19.345 63.524c1.306 4.286 5.081 7.191 9.37 7.286l1.864.047c4.382.048 7.785-4.095 6.993-8.666Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="m310.53 361.191-6.666-20.762c-1.492-4.667-4.615-8.572-8.717-10.953l.28-.476c4.242 2.476 7.411 6.476 8.95 11.286l6.665 20.762-.512.143Z"
        fill="#020202"
      />
      <Path
        d="M318.221 243.429s3.263-3.048-.653-4.143c-1.538-.429-3.822-4.334-5.966-4-2.145.333-3.403 12.666-12.027 16.476 0 0-2.097 1.905 1.352 1.81 3.403-.048 17.294-10.143 17.294-10.143Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M299.575 251.81s-4.288-4.334-3.543-8.381c.746-4.048-1.445-7.477-2.517-5.667-1.072 1.81-2.284.714-2.564 3-.233 2.286 3.077 13.524 6.107 13.524 2.983 0 2.517-2.476 2.517-2.476ZM300.507 252.667s2.797 1.285 1.772 4.285c-1.026 3.048.419 4.239.419 4.239s-3.356.19-3.776-3.096c-.419-3.19 1.585-5.428 1.585-5.428Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M298.922 252.667s-3.542 1.238-3.682 3.571c-.14 2.334 1.865 2.905 2.564 1.524.699-1.381 2.191-4.143 2.191-4.143l-1.073-.952Z"
        fill="#84FFFF"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M313.094 214.952c-5.268-3.714-13.472-.904-16.082 1.239-2.564 2.142-1.166 7.142-1.166 7.142s1.212-2.666 2.191-3.333c1.026-.667 3.916-.238 6.526 0 2.564.238 2.051 3.572 2.051 3.572s.513 4.761-.466 5.666c-.326.286-1.258.572-2.517.714-1.119-.38-2.517.143-4.149-.142-1.585-.286-3.542-.429-3.542-.429s-1.725 1.048-.513 4.952c1.212 3.953.186 1.667-1.305 5.381-1.446 3.715 1.631 2.905.932 5.858-.699 2.904 2.004 4.666 5.547 2.761 3.543-1.904 1.165-1.952 3.17-4.571 2.004-2.619.513-4.238 2.797-6.095 2.284-1.857 2.33-5.143 2.33-5.143.28-.572-.512-4.238-.512-4.238s-.233-1.953.792-3.095c2.657 2.523.699 5.381.699 5.381 3.683-.429 6.247-6.143 6.247-6.143s2.237-5.715-3.03-9.477Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M297.524 231.143s2.424.667 5.035.429c0 0-.373 2.476-3.077 2-1.492-.286-1.958-2.429-1.958-2.429ZM352.017 312.476s-8.111.905-12.353 0c0 0-.559 2.191.326 3.238 0 0 9.743.762 12.027 0 0 0 1.678-1.666 0-3.238Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M346.842 317.572c1.632 0 2.984-1.381 2.984-3.048v-.476c0-1.667-1.352-3.048-2.984-3.048-1.631 0-2.983 1.381-2.983 3.048v.476c0 1.667 1.305 3.048 2.983 3.048Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M297.804 271.381a1.037 1.037 0 0 1-1.025-1.048c0-.578.459-1.047 1.025-1.047.566 0 1.026.469 1.026 1.047 0 .579-.46 1.048-1.026 1.048ZM297.804 284.191a1.037 1.037 0 0 1-1.025-1.048c0-.579.459-1.048 1.025-1.048.566 0 1.026.469 1.026 1.048 0 .579-.46 1.048-1.026 1.048ZM297.804 299.333a1.036 1.036 0 0 1-1.025-1.047c0-.579.459-1.048 1.025-1.048.566 0 1.026.469 1.026 1.048 0 .578-.46 1.047-1.026 1.047Z"
        fill="#30262A"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="m332.672 283.524.513-.143c-1.958-8.571-5.361-16.524-5.408-16.619l-.466.238c.047.095 3.403 8.048 5.361 16.524ZM276.641 282.095c.559-9.523 5.221-21.762 5.267-21.857l-.466-.19c-.047.143-4.708 12.428-5.267 22.047h.466Z"
        fill="#30262A"
      />
    </G>
  </Svg>
);

export default WomanManChat;
