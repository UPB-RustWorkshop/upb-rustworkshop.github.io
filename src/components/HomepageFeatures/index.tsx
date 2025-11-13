import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Web Servers",
    Svg: require("@site/static/img/html5.svg").default,
    description: (
      <>
        Learn how to leverage Rust's typesafety to build efficient web servers.
      </>
    ),
  },
  {
    title: "Desktop Applications",
    Svg: require("@site/static/img/desktop.svg").default,
    description: (
      <>
        Learn how to use <a href="https://tauri.app">Tauri</a> and web
        technologies to build modern desktop apps or{" "}
        <a href="https://slint.dev">Slint</a> to build native desktop apps in
        Rust.
      </>
    ),
  },
  {
    title: "Embedded",
    Svg: require("@site/static/img/embedded.svg").default,
    description: (
      <>
        Use the STM32 Nucleo-U545RE-Q, one of the most affordable and easy to use
        development boards to design and implement hardware devices.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
