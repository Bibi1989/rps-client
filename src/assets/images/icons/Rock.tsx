import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

const RockSvg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={props?.width}
    height={props?.height}
    fill={props?.fill}
    viewBox="0 0 700 700"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <symbol id="a" overflow="visible">
        <path d="M20.844-1.25a14.621 14.621 0 0 1-3.36 1.266 15.506 15.506 0 0 1-3.64.421c-3.781 0-6.777-1.05-8.984-3.156-2.211-2.113-3.313-4.976-3.313-8.594 0-3.625 1.102-6.492 3.313-8.609 2.207-2.113 5.203-3.172 8.984-3.172 1.258 0 2.473.149 3.64.438 1.165.28 2.286.699 3.36 1.25v4.703c-1.086-.739-2.152-1.281-3.203-1.625a10.672 10.672 0 0 0-3.328-.516c-2.086 0-3.727.668-4.922 2-1.2 1.336-1.797 3.18-1.797 5.531 0 2.336.598 4.172 1.797 5.516 1.195 1.336 2.836 2 4.922 2 1.164 0 2.273-.172 3.328-.516 1.05-.343 2.117-.882 3.203-1.625z" />
      </symbol>
      <symbol id="b" overflow="visible">
        <path d="M15.25-12.375a6.878 6.878 0 0 0-1.422-.5 6.719 6.719 0 0 0-1.422-.156c-1.398 0-2.476.449-3.234 1.344-.75.898-1.125 2.18-1.125 3.843V0H2.609v-17.016h5.438v2.797c.695-1.113 1.5-1.926 2.406-2.437.906-.508 1.992-.766 3.266-.766.175 0 .367.012.578.031.218.012.531.043.937.094z" />
      </symbol>
      <symbol id="c" overflow="visible">
        <path d="M19.594-8.547V-7H6.875c.133 1.273.598 2.23 1.39 2.875.79.637 1.895.953 3.313.953 1.145 0 2.317-.164 3.516-.5 1.195-.344 2.43-.86 3.703-1.547v4.188A22.257 22.257 0 0 1 14.922.063c-1.281.25-2.563.375-3.844.375-3.086 0-5.48-.782-7.187-2.344C2.19-3.47 1.344-5.66 1.344-8.484c0-2.782.832-4.961 2.5-6.547 1.675-1.594 3.984-2.39 6.922-2.39 2.675 0 4.816.808 6.421 2.421 1.602 1.606 2.407 3.758 2.407 6.453zM14-10.359c0-1.032-.304-1.864-.906-2.5-.594-.633-1.383-.954-2.36-.954-1.054 0-1.906.297-2.562.891s-1.07 1.45-1.234 2.563z" />
      </symbol>
      <symbol id="d" overflow="visible">
        <path d="M10.234-7.656c-1.137 0-1.992.195-2.563.578-.562.387-.843.953-.843 1.703 0 .688.226 1.23.687 1.625.457.387 1.098.578 1.922.578 1.02 0 1.879-.363 2.578-1.094.696-.738 1.047-1.66 1.047-2.765v-.625zm8.313-2.047V0h-5.485v-2.516c-.73 1.032-1.555 1.782-2.469 2.25-.906.47-2.011.704-3.312.704-1.762 0-3.195-.508-4.297-1.532-1.094-1.03-1.64-2.367-1.64-4.015 0-1.989.679-3.446 2.046-4.375 1.375-.938 3.531-1.406 6.469-1.406h3.203v-.422c0-.864-.34-1.493-1.015-1.891-.68-.406-1.735-.61-3.172-.61-1.168 0-2.258.122-3.266.36-1 .23-1.93.578-2.781 1.047v-4.156a32.153 32.153 0 0 1 3.5-.64 28.904 28.904 0 0 1 3.531-.22c3.07 0 5.285.606 6.64 1.813 1.364 1.21 2.048 3.18 2.048 5.906z" />
      </symbol>
      <symbol id="e" overflow="visible">
        <path d="M8.547-21.844v4.828h5.61v3.89h-5.61v7.22c0 .792.156 1.328.469 1.609.32.273.945.406 1.875.406h2.797V0H9.016C6.867 0 5.348-.445 4.453-1.343 3.555-2.24 3.11-3.758 3.11-5.907v-7.218H.406v-3.891H3.11v-4.828z" />
      </symbol>
      <symbol id="f" overflow="visible">
        <path d="M14.188-14.516v-9.125h5.469V0h-5.469v-2.453c-.75 1-1.578 1.734-2.484 2.203-.899.457-1.938.688-3.125.688-2.094 0-3.82-.833-5.172-2.5C2.063-3.728 1.39-5.867 1.39-8.485c0-2.625.672-4.77 2.016-6.438 1.351-1.664 3.078-2.5 5.172-2.5 1.175 0 2.218.234 3.125.703s1.734 1.203 2.484 2.203zm-3.578 11c1.156 0 2.039-.422 2.656-1.266.613-.851.922-2.086.922-3.703 0-1.625-.309-2.86-.922-3.703-.617-.851-1.5-1.281-2.656-1.281s-2.043.43-2.656 1.281c-.617.844-.922 2.078-.922 3.703 0 1.617.305 2.852.922 3.703.613.844 1.5 1.266 2.656 1.266z" />
      </symbol>
      <symbol id="g" overflow="visible">
        <path d="M11.672-3.516c1.156 0 2.04-.421 2.656-1.265.613-.852.922-2.086.922-3.703 0-1.625-.309-2.86-.922-3.703-.617-.852-1.5-1.282-2.656-1.282-1.168 0-2.063.43-2.688 1.282-.624.855-.937 2.09-.937 3.703 0 1.605.313 2.836.938 3.687.625.856 1.519 1.281 2.687 1.281zm-3.625-11c.75-1 1.578-1.734 2.484-2.203.914-.468 1.97-.703 3.157-.703 2.093 0 3.812.836 5.156 2.5 1.351 1.668 2.031 3.813 2.031 6.438 0 2.617-.68 4.757-2.031 6.422C17.5-.394 15.78.438 13.688.438c-1.188 0-2.243-.235-3.157-.704-.906-.468-1.734-1.195-2.484-2.187V0H2.609v-23.64h5.438z" />
      </symbol>
      <symbol id="h" overflow="visible">
        <path d="M.375-17.016h5.438L10.39-5.469l3.89-11.547h5.438L12.562 1.609c-.718 1.895-1.558 3.219-2.515 3.969-.961.758-2.219 1.14-3.781 1.14H3.109V3.14h1.704c.925 0 1.597-.148 2.015-.437.414-.293.742-.82.985-1.578l.14-.469z" />
      </symbol>
      <symbol id="i" overflow="visible">
        <path d="M2.61-17.016h5.437V0H2.609zm0-6.625h5.437v4.438H2.609z" />
      </symbol>
      <symbol id="j" overflow="visible">
        <path d="M15.906-16.484v4.14a20.233 20.233 0 0 0-3.375-1.093c-1.086-.25-2.106-.375-3.063-.375-1.042 0-1.812.133-2.312.39-.5.262-.75.657-.75 1.188 0 .437.188.777.563 1.016.382.23 1.066.402 2.046.515l.97.125c2.78.356 4.648.938 5.609 1.75.968.813 1.453 2.086 1.453 3.813 0 1.812-.672 3.18-2.016 4.093-1.336.907-3.328 1.36-5.984 1.36-1.118 0-2.278-.09-3.485-.266a29.08 29.08 0 0 1-3.687-.797V-4.75a16.21 16.21 0 0 0 3.328 1.188c1.133.262 2.289.39 3.469.39 1.062 0 1.859-.144 2.39-.437.54-.3.813-.738.813-1.313 0-.488-.188-.847-.563-1.078-.367-.238-1.101-.425-2.203-.562l-.953-.125c-2.418-.3-4.117-.86-5.094-1.672-.969-.82-1.453-2.07-1.453-3.75 0-1.8.613-3.133 1.844-4 1.238-.875 3.133-1.313 5.687-1.313 1 0 2.051.079 3.157.235 1.101.148 2.304.383 3.609.703z" />
      </symbol>
      <symbol id="k" overflow="visible">
        <path d="M19.719-10.359V0H14.25v-7.922c0-1.469-.039-2.477-.11-3.031-.062-.563-.171-.977-.327-1.25a2.343 2.343 0 0 0-.875-.828 2.586 2.586 0 0 0-1.235-.297c-1.136 0-2.03.445-2.687 1.328-.649.875-.969 2.086-.969 3.625V0H2.61v-17.016h5.437v2.5c.82-1 1.691-1.734 2.61-2.203.925-.469 1.945-.703 3.062-.703 1.957 0 3.445.605 4.469 1.812 1.02 1.2 1.531 2.95 1.531 5.25z" />
      </symbol>
      <symbol id="l" overflow="visible">
        <path d="M10.703-13.531c-1.2 0-2.117.434-2.75 1.297-.637.867-.953 2.117-.953 3.75 0 1.625.316 2.871.953 3.734.633.867 1.55 1.297 2.75 1.297 1.188 0 2.094-.43 2.719-1.297.633-.863.953-2.11.953-3.734 0-1.633-.32-2.883-.953-3.75-.625-.863-1.531-1.297-2.719-1.297zm0-3.89c2.926 0 5.21.792 6.86 2.374 1.644 1.575 2.468 3.762 2.468 6.563 0 2.793-.824 4.98-2.469 6.562C15.914-.347 13.63.438 10.703.438c-2.938 0-5.234-.785-6.89-2.36-1.649-1.582-2.47-3.77-2.47-6.562 0-2.8.82-4.988 2.47-6.563 1.656-1.582 3.952-2.375 6.89-2.375z" />
      </symbol>
      <symbol id="m" overflow="visible">
        <path d="M1.75-22.672h19.062v3.531L8.64-4.42h12.516V0H1.39v-3.547l12.172-14.719H1.75z" />
      </symbol>
      <symbol id="n" overflow="visible">
        <path d="M2.438-6.625v-10.391h5.468v1.703c0 .93-.008 2.09-.015 3.485a368.882 368.882 0 0 0-.016 2.78c0 1.368.031 2.352.094 2.954.07.605.195 1.043.375 1.312.219.356.504.633.86.828a2.69 2.69 0 0 0 1.25.282c1.132 0 2.023-.43 2.671-1.297.645-.875.969-2.086.969-3.64v-8.407h5.437V0h-5.437v-2.453c-.824.992-1.695 1.719-2.61 2.187-.918.47-1.93.703-3.03.703C6.491.437 5-.16 3.968-1.359 2.945-2.566 2.438-4.32 2.438-6.625z" />
      </symbol>
      <symbol id="o" overflow="visible">
        <path d="M16.359-16.484v4.438c-.742-.508-1.484-.883-2.234-1.126a7.514 7.514 0 0 0-2.313-.359c-1.512 0-2.695.445-3.547 1.328C7.421-11.316 7-10.078 7-8.484c0 1.586.421 2.82 1.265 3.703.852.887 2.035 1.328 3.547 1.328.852 0 1.66-.125 2.422-.375a6.993 6.993 0 0 0 2.125-1.125V-.5c-.855.313-1.719.547-2.594.703s-1.75.235-2.625.235c-3.074 0-5.476-.785-7.203-2.36-1.73-1.57-2.594-3.757-2.594-6.562 0-2.813.864-5.004 2.594-6.578 1.727-1.57 4.129-2.36 7.203-2.36.883 0 1.758.079 2.625.235.863.156 1.727.39 2.594.703z" />
      </symbol>
      <symbol id="p" overflow="visible">
        <path d="M13.812-23.641v3.578h-3.016c-.773 0-1.308.14-1.609.422-.305.273-.453.75-.453 1.437v1.188h4.64v3.89h-4.64V0H3.296v-13.125H.593v-3.891h2.703v-1.188c0-1.851.516-3.222 1.547-4.109 1.031-.883 2.63-1.328 4.797-1.328z" />
      </symbol>
      <symbol id="q" overflow="visible">
        <path d="M18.375-14.188c.688-1.05 1.504-1.852 2.453-2.406a6.1 6.1 0 0 1 3.125-.828c1.957 0 3.445.605 4.469 1.812 1.02 1.2 1.531 2.95 1.531 5.25V0h-5.469v-8.876c.008-.125.016-.258.016-.406.008-.145.016-.348.016-.61 0-1.206-.18-2.081-.532-2.624-.355-.54-.93-.813-1.719-.813-1.03 0-1.828.43-2.39 1.281-.563.856-.856 2.086-.875 3.688V0H13.53v-8.876c0-1.883-.164-3.098-.484-3.64-.325-.54-.903-.813-1.735-.813-1.043 0-1.851.434-2.422 1.297-.562.855-.843 2.074-.843 3.656V0h-5.47v-17.016h5.47v2.5c.664-.969 1.43-1.691 2.297-2.172a5.799 5.799 0 0 1 2.875-.734c1.175 0 2.21.289 3.109.86.906.562 1.586 1.355 2.047 2.374z" />
      </symbol>
      <symbol id="r" overflow="visible">
        <path d="M19.719-10.359V0H14.25v-7.906c0-1.477-.039-2.492-.11-3.047-.062-.563-.171-.977-.327-1.25a2.343 2.343 0 0 0-.875-.828 2.586 2.586 0 0 0-1.235-.297c-1.136 0-2.03.445-2.687 1.328-.649.875-.969 2.086-.969 3.625V0H2.61v-23.641h5.437v9.125c.82-1 1.691-1.734 2.61-2.203.925-.469 1.945-.703 3.062-.703 1.957 0 3.445.605 4.469 1.812 1.02 1.2 1.531 2.95 1.531 5.25z" />
      </symbol>
      <symbol id="s" overflow="visible">
        <path d="M2.86-22.672h6.53l8.25 15.547v-15.547h5.547V0h-6.546L8.406-15.562V0H2.86z" />
      </symbol>
      <symbol id="t" overflow="visible">
        <path d="M2.86-22.672h9.702c2.883 0 5.098.64 6.641 1.922 1.55 1.281 2.328 3.105 2.328 5.469 0 2.375-.777 4.203-2.328 5.484-1.543 1.281-3.758 1.922-6.64 1.922h-3.86V0H2.86zm5.843 4.234v6.328h3.235c1.132 0 2.007-.273 2.625-.828.625-.55.937-1.332.937-2.343 0-1.008-.312-1.786-.937-2.329-.618-.55-1.493-.828-2.625-.828z" />
      </symbol>
      <symbol id="u" overflow="visible">
        <path d="M2.61-17.016h5.437V-.297c0 2.27-.547 4.004-1.64 5.203-1.094 1.207-2.68 1.813-4.75 1.813h-2.688V3.14h.937c1.032 0 1.739-.235 2.125-.704.383-.46.578-1.37.578-2.734zm0-6.625h5.437v4.438H2.609z" />
      </symbol>
    </defs>
    <path d="M428.49 468.32c12.465-10.789 18.617-23.742 18.461-38.844v-1.195c15.773-2.16 30.277-7.989 43.531-17.504l.125-.125c20.227-14.957 30.141-32.984 29.73-54.07-.02-5.047-.574-9.97-1.68-14.754 1.84-1.196 3.801-2.477 5.867-3.828.243-.22.485-.41.723-.606 13.352-9.34 20.035-24.285 20.023-44.852.473-11.469-3.558-23.14-12.102-35.008a113.27 113.27 0 0 0 11.746-7.789c1.95-1.367 4.188-3.129 6.715-5.277a18.998 18.998 0 0 0 2.52-2.645c.175-.238.378-.515.605-.84 19.836-18.148 29.55-36.188 29.133-54.066 1.039-18.512-8.512-36.457-28.652-53.848l-.125-.113c-32.965-29.52-74.81-35.355-125.54-17.504a318.337 318.337 0 0 0-3.477-3.723v.125c-25.797-26.91-54.176-40.227-85.133-39.934-21.859-.59-46.723 10.434-74.578 33.098l-.125.125c-16.508 12.75-30.332 32.484-41.484 59.23-6.726-3.59-13.477-5.226-20.266-4.914-24.797-.976-44.62 13.684-59.477 44.012l.125-.125c-10.445 20.812-17.242 43.72-20.379 68.707v.114c-3.035 25.406-.242 50.984 8.395 76.738l.125.125c8.984 28.062 30.613 43.598 64.867 46.64 3.504 6.876 8.062 14.075 13.672 21.587l.117.125c19.301 27.535 51.75 37.488 97.359 29.855 3.34 3.8 7.18 7.64 11.516 11.516v.125c19.035 17.074 38.812 25.344 59.355 24.82h.238c21.023-.41 36.973-5.45 47.844-15.113a.744.744 0 0 1 .223-.266zm-44.004-128.54c.238.137.473.297.715.48 1.605.954 3.203 1.922 4.797 2.875 11.945 7.192 24.535 12.27 37.762 15.227 9.644 2.172 19.555 3.247 29.734 3.235 10.355-.008 20.266-1.406 29.734-4.195-.684 10.172-6.086 19.008-16.191 26.5l-.125.125c-11.316 8.082-24.023 12.12-38.13 12.109-16.726-.008-32.315-4.41-46.765-13.184l.125.113c-14.691-9.14-22.246-20.926-22.66-35.375-.008-5.793 1.828-10.105 5.511-12.941h.243a20.174 20.174 0 0 1 5.394-2.402 110.385 110.385 0 0 0 9.856 7.433zm46.039-70.738c.664.2 1.309.355 1.922.48 1.754.317 3.515.633 5.277.954l-.84-.239c13.09 3.118 26.29 4.239 39.566 3.356h.118c7.953-.461 15.91-1.613 23.867-3.477 7.253 7.82 11.168 15.293 11.754 22.418-.012 7.817-2.047 13.762-6.118 17.871l-.367.36c-.125.074-.238.156-.36.242-2.222 1.43-4.3 2.836-6.234 4.199h-.117a214.858 214.858 0 0 1-6.117 4.195c-.191.098-.39.219-.598.36-.941.367-1.86.847-2.757 1.437-.649.2-1.29.43-1.922.715-9.32 4.41-19.352 6.613-30.098 6.594-7.715-.012-15.23-.852-22.543-2.508-9.782-2.164-19.098-5.879-27.938-11.156-1.594-.957-3.192-1.922-4.797-2.883-4.258-2.98-7.852-6.18-10.79-9.59v.125c-5.984-7.125-8.98-15.23-8.991-24.348.007-6.152 2.085-10.707 6.242-13.664v-.125c5.351-2.972 12.312-4.449 20.863-4.43 6.02 3.606 13.012 6.637 20.977 9.114zm102.89-111.03.117.125c10.97 9.445 16.727 18.879 17.266 28.285-.89 9.863-7.242 20.129-19.066 30.82a21.967 21.967 0 0 0-1.555 1.68c-.421.515-.828.996-1.195 1.445a61.148 61.148 0 0 1-2.992 2.277c-.2.168-.398.328-.605.48-6.243 4.798-13.152 8.637-20.746 11.517a432.08 432.08 0 0 1-7.672 2.152c-7.473 2.07-14.945 3.305-22.426 3.723h-.118c-10.023.71-19.98-.094-29.859-2.403-.28-.082-.566-.156-.84-.238a191.529 191.529 0 0 1-4.316-.84 92.577 92.577 0 0 1-4.195-1.445c5.512-3.035 10.305-7.23 14.387-12.586a1.78 1.78 0 0 1 .25-.355c5.312-7.082 8.754-15.598 10.305-25.535 3.293 1.367 8.09 3.445 14.39 6.226 4.22 1.871 8.45 1.992 12.712.367 4.23-1.66 7.265-4.574 9.11-8.761 1.878-4.207 1.995-8.438.366-12.711-1.668-4.227-4.578-7.262-8.753-9.102-14.617-6.488-23.453-9.93-26.5-10.316a23.148 23.148 0 0 0-1.555-.125 53.007 53.007 0 0 0-1.797-.125c-.086-.285-.16-.574-.242-.832-.04-.187-.082-.387-.125-.598-1.766-5.71-4.29-11.469-7.555-17.273 33.133-9.234 60.867-4.523 83.211 14.148zm-294.96 239.56-.125-.125c-12.531-16.91-16.844-30.496-12.953-40.77 2.148-4.043 2.55-8.246 1.2-12.586-1.333-4.375-4.009-7.648-8.032-9.824-4.031-2.149-8.23-2.543-12.586-1.196-4.367 1.336-7.648 4.02-9.832 8.028-3.723 5.984-5.879 12.457-6.473 19.426-12.34-3.664-20.734-11.09-25.18-22.31l.117.126c-7.019-20.883-9.332-41.621-6.957-62.223v-.125c2.633-21.012 8.313-40.277 17.031-57.797l.118-.113c7.863-16.07 17.77-24.59 29.734-25.543 2.925.39 5.918 1.75 8.992 4.074-2.426 8.414-4.668 17.277-6.715 26.617-.957 4.449-.2 8.613 2.277 12.469 2.453 3.883 5.887 6.316 10.31 7.316 4.456.965 8.613.207 12.468-2.277 3.871-2.457 6.309-5.88 7.313-10.316 10.602-48.426 26.55-81.598 47.844-99.52l.125-.125c20.37-16.59 38.324-25.188 53.836-25.777 22.125.336 42.504 10.246 61.152 29.742 3.273 3.398 6.242 6.8 8.871 10.19.082.114.156.24.238.356.336.465.692.91 1.082 1.32 6.578 8.383 11.168 16.583 13.79 24.579l-.126-.598a66.107 66.107 0 0 1 1.797 8.27c-.012.218-.012.41 0 .605.137 1.5.223 3.055.242 4.672-.007 7.691-1.687 14.05-5.039 19.059l.239-.238c-2.887 3.796-6.961 5.593-12.227 5.394a25.922 25.922 0 0 1-6.957-.84l-.36-.125h-.125c-4.941-1.68-9.574-4.723-13.906-9.101h-.117c-10.652-10.547-18.406-18.105-23.266-22.672-.672-1.575-1.637-3.043-2.875-4.43-2.836-3.149-6.352-4.945-10.555-5.395-4.219-.464-8.05.524-11.512 3-3.43 2.508-5.586 5.832-6.477 9.95-1.73 5.91-.808 13.938 2.758 24.105l.125.242c1.762 4.804 2.758 8.32 3 10.547-.316 10.305-4.543 20.977-12.71 32.02l-.126.113c-7.695 10.105-15.656 15.992-23.863 17.629-4.5.606-8.133 2.727-10.914 6.352-2.805 3.632-3.933 7.71-3.355 12.234.605 4.5 2.718 8.132 6.351 10.914 3.633 2.8 7.711 3.925 12.238 3.355 14.586-1.367 28.367-9.637 41.367-24.812a60.258 60.258 0 0 0-.367 6.707c0 9.508 1.711 18.418 5.16 26.742a57.79 57.79 0 0 0-3.484 2.16c-13.746 8.368-20.613 21.91-20.621 40.645a70.284 70.284 0 0 0 .125 5.395c-10.523 1.426-19.477 6.777-26.855 16.07l-.117.117c-7.832 9.426-11.746 21.328-11.754 35.734a47.711 47.711 0 0 0 1.078 10.789c-24.52 1.922-42.672-4.156-54.418-18.227zm141.24 53c-12.633-.273-24.902-5.754-36.816-16.434v.125c-5.266-4.805-9.457-9.527-12.586-14.145l-.238-.367a15.279 15.279 0 0 0-.606-.84c-2.894-4.672-4.41-9.309-4.554-13.906-.008-5.992 1.468-11 4.44-14.984l.118-.125c2.016-2.559 4.5-3.922 7.438-4.074a45.201 45.201 0 0 1 1.797 0c.265.105.546.222.84.355.94.48 1.902.88 2.882 1.2 6.266 8.84 15.02 16.757 26.258 23.741l.125.114c13.844 8.406 28.473 13.883 43.887 16.434.38.566.82 1.12 1.32 1.68l-.117.124c-.156 5.258-2.394 9.805-6.719 13.664-6.347 4.7-15.418 7.176-27.215 7.442l-.253.004z" />
    <use x={70} y={653.332} xlinkHref="#a" />
    <use x={92.832} y={653.332} xlinkHref="#b" />
    <use x={108.176} y={653.332} xlinkHref="#c" />
    <use x={129.273} y={653.332} xlinkHref="#d" />
    <use x={150.27} y={653.332} xlinkHref="#e" />
    <use x={165.141} y={653.332} xlinkHref="#c" />
    <use x={186.242} y={653.332} xlinkHref="#f" />
    <use x={219.344} y={653.332} xlinkHref="#g" />
    <use x={241.613} y={653.332} xlinkHref="#h" />
    <use x={272.723} y={653.332} xlinkHref="#a" />
    <use x={295.555} y={653.332} xlinkHref="#b" />
    <use x={310.898} y={653.332} xlinkHref="#i" />
    <use x={321.563} y={653.332} xlinkHref="#j" />
    <use x={340.082} y={653.332} xlinkHref="#e" />
    <use x={354.953} y={653.332} xlinkHref="#i" />
    <use x={365.617} y={653.332} xlinkHref="#d" />
    <use x={386.609} y={653.332} xlinkHref="#k" />
    <use x={408.758} y={653.332} xlinkHref="#l" />
    <use x={440.965} y={653.332} xlinkHref="#m" />
    <use x={463.523} y={653.332} xlinkHref="#l" />
    <use x={484.895} y={653.332} xlinkHref="#n" />
    <use x={507.043} y={653.332} xlinkHref="#o" />
    <use x={525.484} y={653.332} xlinkHref="#d" />
    <use x={546.48} y={653.332} xlinkHref="#j" />
    <use x={70} y={684.445} xlinkHref="#p" />
    <use x={83.535} y={684.445} xlinkHref="#b" />
    <use x={98.879} y={684.445} xlinkHref="#l" />
    <use x={120.25} y={684.445} xlinkHref="#q" />
    <use x={163.5} y={684.445} xlinkHref="#e" />
    <use x={178.371} y={684.445} xlinkHref="#r" />
    <use x={200.52} y={684.445} xlinkHref="#c" />
    <use x={232.453} y={684.445} xlinkHref="#s" />
    <use x={258.488} y={684.445} xlinkHref="#l" />
    <use x={279.863} y={684.445} xlinkHref="#n" />
    <use x={302.012} y={684.445} xlinkHref="#k" />
    <use x={334.992} y={684.445} xlinkHref="#t" />
    <use x={357.793} y={684.445} xlinkHref="#b" />
    <use x={373.137} y={684.445} xlinkHref="#l" />
    <use x={394.508} y={684.445} xlinkHref="#u" />
    <use x={405.172} y={684.445} xlinkHref="#c" />
    <use x={426.273} y={684.445} xlinkHref="#o" />
    <use x={444.715} y={684.445} xlinkHref="#e" />
  </svg>
);

const Rock = forwardRef(RockSvg);
export default Rock;