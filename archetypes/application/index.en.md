---
title: "{{ .File.ContentBaseName | upper }}"
---

<!--
  This page contains the FIP Card issuer specific information for the
  content/general/fip-validity page. Its content is embedded as a whole per
  issuer via the fip-validity-content shortcode, so it is not rendered as a
  standalone page (see cascade in content/application/_index.en.md).
  Remove any section that does not apply to this issuer.
-->

## Validity Period of the FIP Card

<!--
  For which period is the FIP Card of this issuer valid?
-->

## Taxation

<!--
  Is additional taxation of FIP benefits necessary for employees of this issuer?
-->

## National Discounts (Non-FIP)

<!--
  Which national (non-FIP) discounts can employees of this issuer use for travel abroad?
-->

## General

### FIP Coupon

<!--
  How and when can employees of this issuer request FIP Coupons?
-->

### FIP Reduced Ticket

<!--
  How and when can employees of this issuer request FIP Reduced Tickets (FIP 50 / FIP 75)?
-->

## FIP Coupon

{{< fip-validity-table type="fip-coupon" >}}

## FIP Reduced Ticket

{{< fip-validity-table type="fip-reduced-ticket" >}}
