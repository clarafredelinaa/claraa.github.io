define({
  "taskUrl": "URL của tác vụ",
  "setTask": "Thiết lập",
  "setTaskPopupTitle": "Thiết lập Tác vụ",
  "validate": "Thiết lập",
  "inValidGPService": "Vui lòng nhập dịch vụ địa xử lý hợp lệ.",
  "noOutputParameterWithGeometryType": "Dịch vụ địa xử lý đã chọn phải có ít nhất một thông số đầu ra có loại hình học chỉ định. Vui lòng chọn một dịch vụ địa xử lý khác.",
  "invalidOutputGeometry": "Loại hình học đầu ra của dịch vụ địa xử lý đã chọn không tương thích với các cài đặt dự án. Không thể lưu trữ kết quả của dịch vụ địa xử lý.",
  "GPFeatureRecordSetLayerERR": "Vui lòng nhập một dịch vụ địa xử lý chỉ có đầu vào thuộc loại 'GPFeatureRecordSetLayer'.",
  "invalidInputParameters": "Số lượng thông số đầu vào nhỏ hơn 1 hoặc lớn hơn 3. Vui lòng nhập một dịch vụ địa xử lý hợp lệ.",
  "projectSetting": {
    "title": "Thiết lập Dự án",
    "note": "Lưu ý: Thiết lập Dự án là bước tùy chọn, nếu được cấu hình, người dùng có thể lưu trữ dự án trong lớp bản đồ web mong muốn với các thông số đầu vào và khu vực mất mạng. Người dùng có thể lưu trữ các thông số đầu ra khác từ thanh 'Đầu ra'.",
    "projectPolygonLayer": "Lớp vùng của dự án",
    "outputParameterName": "Tên thông số đầu ra",
    "projectPointLayer": "Lớp điểm của dự án",
    "selectLabel": "Chọn",
    "polygonLayerHelp": "<p>(Các) lớp có các điều kiện sau đây sẽ được hiển thị:<br/><ul><li>Lớp phải có các khả năng chỉnh sửa, tức là 'Tạo', 'Xóa' và 'Cập nhật'</li><li>Lớp phải chứa 2 trường có đúng tên và loại dữ liệu:</li><ul><li>name (Trường loại chuỗi)</li><li>globalid (Trường loại GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>(Các) lớp vùng đầu ra từ URL tác vụ sẽ được hiển thị<p/>",
    "pointLayerHelp": "<p>(Các) lớp điểm có các điều kiện sau đây sẽ được hiển thị: <br/><ul><li>Lớp phải có các khả năng chỉnh sửa, tức là 'Tạo', 'Xóa' và 'Cập nhật'</li><li>Lớp phải chứa 2 trường có đúng tên và loại dữ liệu:</li><ul><li>inputtype (Trường loại chuỗi)</li><li>projectid (Trường loại GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "flag": "Cờ",
    "barrier": "Rào cản",
    "skip": "Bỏ qua",
    "title": "Đầu vào",
    "inputTooltip": "Chú giải công cụ",
    "typeText": "Loại",
    "symbol": "Ký hiệu",
    "summaryEditorText": "Văn bản Tóm tắt",
    "summaryTextTitle": "Cung cấp văn bản để hiển thị trên tab đầu vào"
  },
  "summaryTab": {
    "title": "Đầu ra",
    "summaryFieldsetText": "Cài đặt tóm tắt",
    "inputOutput": "Đầu vào/Đầu ra",
    "field": "Trường",
    "operator": "Toán tử",
    "inputOperatorCountOption": "Số lượng",
    "outputOperatorCountOption": "Số lượng",
    "outputOperatorSkipCountOption": "Bỏ qua",
    "fieldOperatorSumOption": "Tổng",
    "fieldOperatorMinOption": "Tối thiểu",
    "fieldOperatorMaxOption": "Tối đa",
    "fieldOperatorMeanOption": "Trung bình",
    "expressionAddButtonText": "Thêm",
    "expressionVerifyButtonText": "Xác minh",
    "summaryEditorText": "Văn bản Tóm tắt",
    "zoomText": "Tự động thu phóng sau khi truy tìm",
    "summarSettingTooltipText": "Thêm số lượng đầu vào/đầu ra",
    "symbol": "Ký hiệu",
    "outputParametersText": "Thông số Đầu ra",
    "skipText": "Có thể bỏ qua",
    "visibilityText": "Hiển thị",
    "exportToCsvText": "Xuất ra CSV",
    "settitngstext": "Thiết lập",
    "saveToLayerText": "Lưu vào Lớp (Tùy chọn)",
    "inputLabel": "Nhãn",
    "inputTooltip": "Chú giải công cụ",
    "outputDisplay": "Văn bản hiển thị",
    "addFieldTitle": "Thêm Trường",
    "setScale": "Đặt tỷ lệ",
    "enterDisplayText": "Nhập văn bản hiển thị",
    "saveToLayerHelp": "<p>Lớp có các điều kiện sau đây sẽ được hiển thị:<br/><ul><li>Lớp phải có các khả năng chỉnh sửa, tức là 'Tạo', 'Xóa' và 'Cập nhật'</li><li>Lớp phải chứa hai trường có tên và loại dữ liệu như sau:</li><ul><li>parametername (Trường loại chuỗi)</li><li>projectid (Trường loại Guid)</li></ul></ul><p/>",
    "exportToCsvDisplayText": "CSV",
    "summaryTextTitle": "Cung cấp văn bản tóm tắt để hiển thị trên tab đầu ra",
    "addSummaryItemsTitle": "Thêm Mục Tóm tắt"
  },
  "validationErrorMessage": {
    "webMapError": "Không có lớp nào có trong bản đồ web. Vui lòng chọn một bản đồ web hợp lệ.",
    "inputTypeFlagGreaterThanError": "Không được nhập nhiều hơn một loại cờ đầu vào.",
    "inputTypeFlagLessThanError": "Có tối thiểu một mục loại cờ đầu vào được yêu cầu.",
    "inputTypeBarrierErr": "Không được nhập nhiều hơn một đầu vào của loại rào cản",
    "inputTypeSkipErr": "Không được nhập nhiều hơn một loại bỏ qua đầu vào.",
    "displayTextForButtonError": "Không được để trống văn bản hiển thị cho nút 'Chạy'.",
    "UnableToLoadGeoprocessError": "Không thể tải dịch vụ địa xử lý.",
    "invalidSummaryExpression": "Biểu thức không hợp lệ.",
    "validSummaryExpression": "Thành công!",
    "invalidProjectSettings": "Thiết lập Dự án Không hợp lệ.<br/> Vui lòng chọn giá trị hợp lệ trong '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Gợi ý: Cung cấp nhãn hiển thị cho bảng kết quả của thông số đầu ra.",
    "displayTextHint": "Gợi ý: Mục này sẽ được hiển thị trong bảng chi tiết cho thông số đầu ra này.",
    "inputTextHint": "Gợi ý: Xây dựng biểu thức bên dưới bằng cách thêm nút mục tóm tắt.",
    "expressionHint": "Gợi ý: Chọn các mục và nhấp vào thêm để xây dựng biểu thức."
  }
});