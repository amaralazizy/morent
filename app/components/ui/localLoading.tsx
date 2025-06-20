/**
 * LocalLoading - Reusable car-themed loading component
 *
 * @example
 * // Basic usage
 * <LocalLoading />
 *
 * @example
 * // Search loading
 * <LocalLoading text="Searching for cars..." size="md" theme="primary" />
 *
 * @example
 * // Small loading for buttons
 * <LocalLoading size="sm" text="Loading..." showSpinner={false} padding="py-4" />
 *
 * @example
 * // Success state loading
 * <LocalLoading text="Processing payment..." theme="success" animationSpeed="slow" />
 *
 * @example
 * // Error retry loading
 * <LocalLoading text="Retrying..." theme="error" size="lg" animationSpeed="fast" />
 */

interface LocalLoadingProps {
  // Size variants
  size?: "sm" | "md" | "lg" | "xl";
  // Custom text
  text?: string;
  // Show/hide spinner
  showSpinner?: boolean;
  // Custom padding
  padding?: string;
  // Custom container classes
  className?: string;
  // Animation speed
  animationSpeed?: "slow" | "normal" | "fast";
  // Color theme
  theme?: "primary" | "secondary" | "success" | "warning" | "error";
}

export default function LocalLoading({
  size = "md",
  text = "Loading...",
  showSpinner = true,
  padding = "py-16",
  className = "",
  animationSpeed = "normal",
  theme = "primary",
}: LocalLoadingProps) {
  // Size configurations
  const sizeConfig = {
    sm: {
      container: "w-48 h-16",
      car: { width: 40, height: 20 },
      dashes: 4,
      dashSize: "w-3 h-0.5",
      spinner: "h-4 w-4",
      text: "text-sm",
    },
    md: {
      container: "w-64 h-24",
      car: { width: 60, height: 30 },
      dashes: 6,
      dashSize: "w-4 h-0.5",
      spinner: "h-5 w-5",
      text: "text-lg",
    },
    lg: {
      container: "w-80 h-32",
      car: { width: 80, height: 40 },
      dashes: 8,
      dashSize: "w-6 h-0.5",
      spinner: "h-6 w-6",
      text: "text-xl",
    },
    xl: {
      container: "w-96 h-40",
      car: { width: 100, height: 50 },
      dashes: 10,
      dashSize: "w-8 h-0.5",
      spinner: "h-8 w-8",
      text: "text-2xl",
    },
  };

  // Theme configurations
  const themeConfig = {
    primary: {
      carBody: "fill-primary-500",
      carTop: "fill-primary-600",
      carWindows: "fill-primary-100",
      carDetails: "fill-primary-400",
      spinner: "border-primary-200 border-t-primary-500",
      text: "text-secondary-600",
    },
    secondary: {
      carBody: "fill-secondary-500",
      carTop: "fill-secondary-600",
      carWindows: "fill-secondary-100",
      carDetails: "fill-secondary-400",
      spinner: "border-secondary-200 border-t-secondary-500",
      text: "text-secondary-600",
    },
    success: {
      carBody: "fill-success-500",
      carTop: "fill-success-600",
      carWindows: "fill-success-100",
      carDetails: "fill-success-400",
      spinner: "border-success-200 border-t-success-500",
      text: "text-success-600",
    },
    warning: {
      carBody: "fill-warning-500",
      carTop: "fill-warning-600",
      carWindows: "fill-warning-100",
      carDetails: "fill-warning-400",
      spinner: "border-warning-200 border-t-warning-500",
      text: "text-warning-600",
    },
    error: {
      carBody: "fill-error-500",
      carTop: "fill-error-600",
      carWindows: "fill-error-100",
      carDetails: "fill-error-400",
      spinner: "border-error-200 border-t-error-500",
      text: "text-error-600",
    },
  };

  // Animation speed configurations
  const speedConfig = {
    slow: "animate-car-bounce-slow animate-dash-move-slow",
    normal: "animate-car-bounce animate-dash-move",
    fast: "animate-car-bounce-fast animate-dash-move-fast",
  };

  const config = sizeConfig[size];
  const colors = themeConfig[theme];
  const speed = speedConfig[animationSpeed];

  return (
    <div className={`flex items-center justify-center ${padding} ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        {/* Car Animation */}
        <div className={`relative ${config.container} overflow-hidden`}>
          {/* Road */}
          <div className="absolute bottom-0 w-full h-2 bg-secondary-400 rounded">
            {/* Road lines animation */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/30 transform -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Animated road dashes */}
          <div className="absolute bottom-0 w-full h-2 flex items-center">
            <div className={`flex space-x-4 ${speed.split(" ")[1]}`}>
              {Array.from({ length: config.dashes }).map((_, i) => (
                <div
                  key={i}
                  className={`${config.dashSize} bg-white/60 rounded`}
                ></div>
              ))}
            </div>
          </div>

          {/* Car */}
          <div
            className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 ${
              speed.split(" ")[0]
            }`}
          >
            <svg
              width={config.car.width}
              height={config.car.height}
              viewBox="0 0 100 50"
              className={colors.carBody}
            >
              {/* Car Body - Perfectly centered in 100x50 viewBox */}
              <rect
                x="15"
                y="25"
                width="70"
                height="15"
                rx="3"
                className={colors.carBody}
              />
              <rect
                x="20"
                y="15"
                width="60"
                height="15"
                rx="8"
                className={colors.carTop}
              />

              {/* Windows - Symmetrically positioned */}
              <rect
                x="25"
                y="18"
                width="18"
                height="8"
                rx="2"
                className={colors.carWindows}
              />
              <rect
                x="57"
                y="18"
                width="18"
                height="8"
                rx="2"
                className={colors.carWindows}
              />

              {/* Wheels - Evenly spaced from center */}
              <circle cx="30" cy="40" r="6" className="fill-secondary-700" />
              <circle cx="70" cy="40" r="6" className="fill-secondary-700" />
              <circle cx="30" cy="40" r="3" className="fill-secondary-300" />
              <circle cx="70" cy="40" r="3" className="fill-secondary-300" />

              {/* Headlights - At the front */}
              <circle cx="87" cy="29" r="2" className="fill-warning-300" />
              <circle cx="87" cy="36" r="1.5" className="fill-error-400" />

              {/* Side details - Centered on car body */}
              <rect
                x="20"
                y="28"
                width="60"
                height="2"
                rx="1"
                className={colors.carDetails}
              />
            </svg>
          </div>
        </div>

        {/* Loading Text and Spinner */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            {showSpinner && (
              <div
                className={`animate-spin rounded-full ${config.spinner} border-2 ${colors.spinner}`}
              ></div>
            )}
            <h2 className={`font-semibold ${config.text} ${colors.text}`}>
              {text}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
