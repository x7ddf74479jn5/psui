import { Check, Copy as CopyIcon } from "lucide-react";
import React from "react";

import { Button } from "../Button";
import { cn } from "../utils";

/**
 * ただのCopyです。
 *
 * Default Class Name: ~ "absolute top-2 right-2 text-xs p-2 h-fit rounded-md bg-transparent" ~
 */
export const Copy = ({
  className,
  contentToCopy,
  copyIcon,
  defaultClassName = "absolute top-2 right-2 text-xs p-2 h-fit rounded-md bg-transparent",
  successIcon,
}: {
  /**
   * コンポーネントに適用するクラス名
   */
  className?: string;
  /**
   * コンポーネントに適用するデフォルトのクラス名
   */
  defaultClassName?: string;
  /**
   * コピーする内容
   */
  contentToCopy: string;
  /**
   * 標準のアイコン
   */
  copyIcon?: React.ReactNode;
  /**
   * 成功時のアイコン
   */
  successIcon?: React.ReactNode;
}) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(contentToCopy || "");
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      }}
      className={cn(defaultClassName, className)}
    >
      {copied
        ? successIcon || <Check className="h-4 w-4" />
        : copyIcon || <CopyIcon className="h-4 w-4" />}
    </Button>
  );
};

Copy.displayName = "Copy";
