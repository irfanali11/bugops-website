import type { ComponentType } from "react";
import {
  MvpDevelopmentIllustration,
  ProductDiscoveryIllustration,
  UiUxDesignIllustration,
} from "@/components/how-we-deliver/DeliverIllustrations";

export const deliverIllustrations: Record<string, ComponentType> = {
  "product-discovery": ProductDiscoveryIllustration,
  "mvp-development": MvpDevelopmentIllustration,
  "ui-ux-design": UiUxDesignIllustration,
};

export function getDeliverIllustration(id: string): ComponentType | undefined {
  return deliverIllustrations[id];
}
