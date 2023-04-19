import React from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
} from "react-native";

type TextColorType = "black" | "white" | "orange";
type BackgroundColorType = "black" | "orange" | "bg-icon";
type IconPositionType = "start" | "end";

type ButtonProps = {
  title?: string;
  color?: TextColorType;
  background?: BackgroundColorType | string;
  icon?: ImageSourcePropType;
  iconPosition?: IconPositionType;
  iconSize?: string;
  onPress?: (e: GestureResponderEvent) => void;
};

type IconButtonProps = {
  icon: ImageSourcePropType;
  iconSize?: string;
  className?: string;
  background?: BackgroundColorType | string;
  onPress?: (e: GestureResponderEvent) => void;
};

const RegularButton: React.FC<ButtonProps> = (props) => {
  const iconMargin = props.iconPosition === "start" ? "mr-1.5" : "ml-1.5";

  const reverseChildOrder =
    props.iconPosition === "start" ? "flex-row-reverse" : "flex-row";

  const sizes = props.iconSize
    ? `w-[${props.iconSize}px] h-[${props.iconSize}px]`
    : "w-4 h-4";

  const color = props.color
    ? props.color === "orange"
      ? "text-primary"
      : props.color === "white"
      ? "text-white"
      : "text-black"
    : "text-black";

  const bgColor = props.background
    ? props.background !== "bg-icon" && props.background !== "black"
      ? props.background === "orange"
        ? `bg-primary`
        : `bg-[${props.background}]`
      : `bg-${props.background}`
    : "bg-primary";

  return (
    <Pressable
      className={`rounded-lg ${bgColor} ${reverseChildOrder} items-center justify-center px-4 py-3`}
      onPress={props.onPress}
    >
      <Text className={`${color} text-sm font-semibold`}>{props.title}</Text>

      {props.icon ? (
        <Image
          source={props.icon}
          className={`${sizes} ${iconMargin}`}
          style={{ resizeMode: "contain" }}
        />
      ) : null}
    </Pressable>
  );
};

const RoundedButton: React.FC<ButtonProps> = (props) => {
  const iconMargin = props.iconPosition === "start" ? "mr-1.5" : "ml-1.5";

  const reverseChildOrder =
    props.iconPosition === "start" ? "flex-row-reverse" : "flex-row";

  const sizes = props.iconSize
    ? `w-[${props.iconSize}px] h-[${props.iconSize}px]`
    : "w-4 h-4";

  const color = props.color
    ? props.color === "orange"
      ? "text-primary"
      : props.color === "white"
      ? "text-white"
      : "text-black"
    : "text-black";

  const bgColor = props.background
    ? props.background !== "bg-icon" && props.background !== "black"
      ? props.background === "orange"
        ? `bg-primary`
        : `bg-[${props.background}]`
      : `bg-${props.background}`
    : "bg-primary";

  return (
    <Pressable
      className={`rounded-full ${bgColor} ${reverseChildOrder} items-center justify-center px-4 py-2`}
      onPress={props.onPress}
    >
      <Text className={`${color} text-sm font-semibold`}>{props.title}</Text>

      {props.icon ? (
        <Image
          source={props.icon}
          className={`${sizes} ${iconMargin}`}
          style={{ resizeMode: "contain" }}
        />
      ) : null}
    </Pressable>
  );
};

const IconButton: React.FC<IconButtonProps> = (props) => {
  const sizes = props.iconSize
    ? `w-[${props.iconSize}px] h-[${props.iconSize}px]`
    : "w-[18px] h-[18px]";

  const bgColor = props.background
    ? props.background === "black"
      ? "bg-black"
      : props.background === "orange"
      ? "bg-primary"
      : `bg-[${props.background}]`
    : `bg-bg-icon`;

  return (
    <Pressable
      className={`items-center justify-center rounded-full p-[7px] ${bgColor}`}
      onPress={props.onPress}
    >
      <Image
        source={props.icon}
        className={`${sizes}`}
        style={{ resizeMode: "contain" }}
      />
    </Pressable>
  );
};

export { RegularButton, RoundedButton, IconButton };
