import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
/**
 * @description 获取地图的一些虚拟信息, 同useMapPointsInfo
 */
export default function useGetLaserMapPoints(mapId: string): Promise<unknown> {
  return IndoorMapApi.getLaserMapPoints(IndoorMapUtils.getMapInstance(mapId));
}
