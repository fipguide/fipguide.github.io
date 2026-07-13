/*
 * Javascript for the interactive features of the night train map
 */

// This script assumes the existence of a variable map_i18n containing
// relevant translations. The variable is currently defined in a code
// snippet in the wordpress to allow adjusting translations from there.
// We define a fallback here to make it work standalone.
if (typeof map_i18n !== "object") {
  var map_i18n = {
    back: "Back",
    close: "Close",
    runs: "Runs",
    details: "More Details",
    fipInformation: "FIP Informations",
    selectline: "Select a line",
  };
}

var map_div = document.querySelector("#bot-map");
var map_svg = document.querySelector("#bot-map svg");
var map_viewbox = map_svg.viewBox.baseVal;

function getFipDetailsTarget(route_id) {
  if (!window.nighttrainsFipByRouteId) {
    return null;
  }
  return window.nighttrainsFipByRouteId[String(route_id)] || null;
}

function scrollToFipDetails(route_id) {
  var target_id = getFipDetailsTarget(route_id);
  if (!target_id) {
    return;
  }
  var target = document.getElementById(target_id);
  if (!target) {
    return;
  }
  target.open = true;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleZoom(e) {
  d3.select("#bot-map > svg > g").attr("transform", e.transform);
  if (e.transform.k > 2) {
    map_svg.classList.add("zoomed");
  } else {
    map_svg.classList.remove("zoomed");
  }
}

let zoom = d3
  .zoom()
  .scaleExtent([1, 16])
  .translateExtent([
    [0, 0],
    [map_viewbox.width, map_viewbox.height],
  ])
  .on("zoom", handleZoom);

d3.select("#bot-map > svg")
  .call(zoom)
  .on("wheel.zoom", null)
  .on("dblclick.zoom", null);

function addOverlay(title_html, body_html, x_position = null) {
  var html = '<div class="buttons close">';
  html += `<a href="javascript:void(0)" onclick="removeOverlay();" class="button">${map_i18n.close}</a>`;
  if (last_clicked) {
    html += `<a href="javascript:void(0)" onclick="lastOverlay();" class="button">${map_i18n.back}</a> `;
  }
  html += "</div>";
  html += "<h6>" + title_html + "</h6>";
  html += body_html;

  document.querySelector(".traininfo-overlay .text-content").innerHTML = html;
  document.querySelector(".traininfo-overlay").classList.add("active");

  // On wide screens, the overlay should be displayed on the right edge,
  // unless the supplied x_position is too far right
  // (on portrait format screens, the overlay is at the bottom anyways).
  if (x_position) {
    if (x_position < screen.width * 0.67) {
      document.querySelector(".traininfo-overlay").style.right = "0";
    } else {
      document.querySelector(".traininfo-overlay").style.right = "unset";
    }
  }
}

function removeOverlay() {
  document.querySelector(".traininfo-overlay").classList.remove("active");
  removeHighlight();
}

function lastOverlay() {
  removeHighlight();
  if (last_clicked) {
    last_clicked_copy = last_clicked;
    last_clicked = null;
    if (last_clicked_copy.tagName) {
      // it was a singe train!
      onClickGenerator(last_clicked_copy.id);
    } else if ("___" == last_clicked_copy.substr(0, 3)) {
      // it was a list of trains!
      showTrainListOverlay(last_clicked_copy.substr(3).split(","));
    } else {
      console.log(
        "Unknown value " + last_clicked_copy + " of variable last_clicked.",
      );
    }
  } else {
    removeOverlay();
  }
}

function getStrokeColor(id) {
  el = document.getElementById(`#${id}#`);
  stroke = el.getAttribute("stroke");
  if (!stroke || stroke == "none") {
    if (el.children.length > 0) stroke = el.children[0].getAttribute("stroke");
  }
  if (!stroke || stroke == "none") {
    stroke = "#a0a0a0";
  }
  return stroke;
}

function showSingleTrainOverlay(id, x_position = null) {
  removeHighlight();
  el = document.getElementById(`#${id}#`);
  el.style.stroke = "white";
  el.style.strokeWidth = "2px";
  highlighted.push(el);
  if (el.children.length > 0) {
    var childs = el.children;
    for (var i = 0; i < childs.length; i++) {
      childs[i].style.stroke = "white";
      childs[i].style.strokeWidth = "2px";
      highlighted.push(childs[i]);
    }
  }

  const title =
    `<span style="color:#2271B3"><strong>` +
    `${view_ontd_map[id].agency_id}</strong></span> ` +
    `${view_ontd_map[id].route_long_name}`;
  const stroke = getStrokeColor(id);
  var fip_button = "";
  if (getFipDetailsTarget(id)) {
    fip_button = `<a href="javascript:void(0)" onclick="scrollToFipDetails('${id}')" class="button">${map_i18n.fipInformation}</a>`;
  }

  const text = `
<div class="row singletrain">

<div class="column">
<p style="color:#2271B3;font-weight: bold">
<span class="miniline" style="background-color: ${stroke}"></span>
${view_ontd_map[id].trip_short_name_0}
</p>
<p>
<strong>${view_ontd_map[id].origin_trip_0}</strong> (${view_ontd_map[id].origin_departure_time_0}) - ${view_ontd_map[id].via_0} - <strong>${view_ontd_map[id].destination_trip_0}</strong> (${view_ontd_map[id].destination_arrival_time_0})
</p>
<p style="color:#2271B3"><strong>${map_i18n.runs}:</strong></span> ${view_ontd_map[id].service_id_0}</p>
<p style="color:#ee0000">${view_ontd_map[id].irregularities_0}</p>
</div>

<div class="column">
<p style="color:#2271B3;font-weight: bold">
<span class="miniline" style="background-color: ${stroke}"></span>
${view_ontd_map[id].trip_short_name_1}
</p>
<p>
<strong>${view_ontd_map[id].origin_trip_1}</strong> (${view_ontd_map[id].origin_departure_time_1}) - ${view_ontd_map[id].via_1} - <strong>${view_ontd_map[id].destination_trip_1}</strong> (${view_ontd_map[id].destination_arrival_time_1})
</p>
<p style="color:#2271B3"><strong>${map_i18n.runs}:</strong></span> ${view_ontd_map[id].service_id_1}</p>
<p style="color:#ee0000">${view_ontd_map[id].irregularities_1}</p>
</div>

<div class="column">
<div class="buttons details">
<a href="https://back-on-track.eu/nighttrains/?route_id=${id}" target="_blank" class="button button-primary primary">${map_i18n.details}</a>
${fip_button}
</div>
</div>

</div>
 `;

  if (!x_position) {
    x_position = el.getBoundingClientRect().right;
  }
  addOverlay(title, text, x_position);
}

function showTrainListOverlay(ids, x_position = null) {
  removeHighlight();
  ids = [...new Set(ids)]; // make unique
  last_clicked_string = "___" + ids.join(",");

  const title = `<span style="color:#2271B3"><strong>${map_i18n.selectline}</strong></span>`;

  // we want to sort by strings of the form ORIGIN – DESTINATION
  var header_sort = ids.map(function (id) {
    const start_end = [
      view_ontd_map[id].origin_trip_0,
      view_ontd_map[id].destination_trip_0,
    ].sort();
    return { id, text: `${start_end[0]} – ${start_end[1]}` };
  });
  header_sort.sort((a, b) => (a.text > b.text ? 1 : -1));
  var text = '<div class="row trainlist"><div class="column">';
  for (const h_s of header_sort) {
    id = h_s.id;
    const stroke = getStrokeColor(id);
    text += '<p style="color:#2271B3;font-weight: bold">';
    text += `<a href="javascript:void(0)" onclick="onClickGenerator('${id}', '${last_clicked_string}')(new Event('click'))">`;
    text += `<span class="miniline" style="background-color: ${stroke}"></span>`;
    text += `${h_s.text}</a>`;
    text +=
      ` ${view_ontd_map[id].agency_id} ` +
      `${view_ontd_map[id].trip_short_name_0} + ` +
      `${view_ontd_map[id].trip_short_name_1}`;
    if (view_ontd_map[id].route_long_name)
      text += ` "${view_ontd_map[id].route_long_name}"`;
    text += "</p>";
  }
  text += "</div></div>";

  addOverlay(title, text, x_position);
}

function removeHighlight() {
  for (const hl of highlighted) {
    hl.style.filter = "unset";
    hl.style.removeProperty("stroke");
    hl.style.removeProperty("stroke-width");
  }
  highlighted = [];
}

function get_view_ontd_map() {
  //getting routes sheet from the bot-backend
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      view_ontd_map = JSON.parse(this.responseText);
      const ids = Object.keys(view_ontd_map);
      for (const id of ids) {
        //add route prefix-suffix so it doesn't get muddled up with other element ids
        routeId = `#${id}#`;
        const el = document.getElementById(routeId);
        if (el) {
          el.addEventListener("mouseenter", onMouseEnterGenerator(id));
          el.addEventListener("mouseleave", onMouseLeaveGenerator(id));
          el.addEventListener("click", onClickGenerator(id));
        }
        //else{console.log(`couldn't find id ${id}`);}
      }
    }
  };
  //use this to get data directly from the spreadsheet - not recommended...
  //const url = "https://script.google.com/macros/s/AKfycbwY9zNQFq0urCHsTstWRKxLe0SstWrwyY04tSuDIVb_yRCtTs_HDlRARS-5fqltgEZr/exec?table=view_ontd_map"
  //... from github - possible, but not what we want...
  //const url = "https://back-on-track-eu.github.io/night-train-data/data/latest/view_ontd_map.json";
  // from the webspace (synchronised by our custom wordpress plugin)
  const url = "/nighttrains/view_ontd_map.json";
  // from somewhere local
  //const url = "../view_ontd_map.json";
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

var view_ontd_map = get_view_ontd_map();

var last_clicked = null;
var highlighted = [];

const urlParams = new URLSearchParams(window.location.search);
var preset_route_id = urlParams.get("route_id");
if (preset_route_id) {
  preset_route_id = preset_route_id.replace(/[^0-9]/g, "");
  setTimeout(function () {
    // We scroll to the path. In the future, we could also zoom on mobile.
    preset_route_path = document.getElementById("#" + preset_route_id + "#");
    preset_route_box = preset_route_path.getBoundingClientRect();
    scroll_to_y =
      preset_route_box.top +
      preset_route_box.height / 2 -
      map_div.getBoundingClientRect().top -
      window.innerHeight / 2;
    window.scrollTo(0, scroll_to_y);
    onClickGenerator(preset_route_id)(new Event("click"));
  }, 1500);
}

map_svg.addEventListener("click", (event) => {
  event.preventDefault();
  // To debug the touch action on a desktop, you may want to uncomment the
  // following, and comment out the .on("wheel.zoom", null) further above.
  if (event.pointerType === "mouse") {
    removeOverlay();
    return;
  }
  var map_divrect = map_div.getBoundingClientRect();
  // get the transformation of the current zoom and pan state
  var transform = d3.zoomTransform(d3.select("#bot-map svg").node());
  var pointer_x = event.clientX;
  var pointer_y = event.clientY;
  if (pointer_x === undefined || pointer_y === undefined) {
    pointer_x = event.pageX - window.scrollX;
    pointer_y = event.pageY - window.scrollY;
  }
  x_before =
    ((pointer_x - map_divrect.left) / map_divrect.width) * map_viewbox.width;
  y_before =
    ((pointer_y - map_divrect.top) / map_divrect.height) * map_viewbox.height;
  [x_touch, y_touch] = transform.invert([x_before, y_before]);
  paths = document.querySelectorAll("#NIGHTTRAINS path");
  var path_ids = [];
  for (const path of paths) {
    // get the coord transformation matrix for the path's coords
    var ctm = path.getScreenCTM().inverse().multiply(map_svg.getScreenCTM());
    var l = 0;
    // traverse each path and compare distances to the touch point
    while (l < path.getTotalLength()) {
      // we need to apply two coordinate transformations,
      // one for the path, and one for the current d3 zoom and pan state
      var point = path.getPointAtLength(l).matrixTransform(ctm.inverse());
      var [x_point, y_point] = transform.invert([point.x, point.y]);
      if (
        Math.abs(x_point - x_touch) < 12 &&
        Math.abs(y_point - y_touch) < 12
      ) {
        // this path is nearby the touch location!
        path_ids.push(path.id);
        break;
      }
      l += 10;
    }
  }
  console.log(x_touch + " " + y_touch + " - nearby: " + path_ids.join(", "));
  if (path_ids.length > 0) {
    // get route_ids from path_ids
    var valid_ids = new Set(Object.keys(view_ontd_map));
    path_ids = path_ids.map((x) => {
      x_nohash = x.replaceAll("#", "");
      el = document.getElementById(x);
      while (!valid_ids.has(x_nohash)) {
        if (el === null || x === "NIGHTTRAINS" || el.tagName === "svg") {
          console.log(
            '"' +
              x +
              '" does not give rise to a valid route id, nor does any of its parents.',
          );
          return null; // give up
        }
        el = el.parentElement;
        x_nohash = el.id.replaceAll("#", "");
      }
      return x_nohash;
    });
    route_ids = path_ids.filter(Number); // remove NULLs

    if (route_ids.length == 1) {
      showSingleTrainOverlay(route_ids[0]);
    }
    if (route_ids.length > 1) {
      showTrainListOverlay(route_ids, event.pageX);
    }
  } else {
    removeOverlay();
  }
});

function onMouseEnterGenerator(id) {
  return function onMouseEnter(event) {
    const { currentTarget: el } = event;
    el.style.filter = "drop-shadow(0 0 1.4px white)";
  };
}

function onMouseLeaveGenerator(id) {
  return function onMouseLeave(event) {
    const { currentTarget: el } = event;
    if (el !== last_clicked) {
      el.style.filter = "unset";
    }
  };
}

function onClickGenerator(id, last = null) {
  return function onClick(event) {
    event.preventDefault();

    if (last) {
      last_clicked = last;
    }
    showSingleTrainOverlay(id);

    // prevent the immediate closing of the tooltip by the click action of the map_svg
    if (event.stopPropagation) event.stopPropagation();
  };
}
