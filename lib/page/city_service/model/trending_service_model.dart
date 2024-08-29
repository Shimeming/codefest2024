import 'package:flutter/material.dart';
import 'package:town_pass/gen/assets.gen.dart';

abstract final class TrendingServiceModel {
  static List<TrendingService> get serviceList {
    return [
      TrendingService(
        title: '找地點',
        icon: Assets.svg.iconLocationSearch.svg(),
        url: 'https://taipei-pass-service.vercel.app/surrounding-service/',
      ),
      TrendingService(
        icon: Assets.svg.iconDashboardReports.svg(),
        title: '市民儀表板',
        url: 'https://dashboard.gov.taipei/',
      ),
      TrendingService(
        icon: Assets.svg.iconLocationSearch.svg(),
        title: '施工資訊',
        url: 'https://codefest2024-bm3n7d2hk-shimemings-projects.vercel.app/',
      ),
      // 在此列表後加入新熱門按鈕
      // add new trending service button here
    ];
  }
}

class TrendingService {
  final Widget icon;
  final String title;
  final String url;

  const TrendingService({
    required this.icon,
    required this.title,
    required this.url,
  });
}
