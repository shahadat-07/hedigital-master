export const optionsObj = {
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 5,
        opacity: 0.8,
        size: 20,
      },
      grab: {
        distance: 200,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: {
        value: "#ffffff",
      },
      distance: 120,
      enable: true,
      opacity: 0.4,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
    },
    number: {
      density: {
        enable: true,
      },
    },
    opacity: {
      random: {
        enable: true,
      },
      value: {
        min: 0.1,
        max: 0.2,
      },
      animation: {
        enable: true,
        speed: 0.1,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 0.1,
        max: 5,
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
      },
    },
  },
};
