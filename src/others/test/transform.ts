/**
* 将 config 的信息，转换成 target，格式范例见 target
* 规则如下：
* 没有id的对象不需要转换
* id>=8000的对象不需要转换
* 在id转换成name的时候，在id前加上 flaw_type_ 拼接成name
* nickName 是 show属性的转换
* 子对象的 nickName 是父对象的属性名为Attributes的兄弟对象的show属性加上 _ 下划线，再加自身的show属性拼接而成。

* 在实际应用中，config 是因每个项目不同，子对象嵌套层数可能不同(可能嵌套两层、三层、四层...)
 * @param obj 待转换对象
 * @param level 层次
 * @param prefixs nickName 前缀数组
 * @param result 结果集
 * @returns void
 */

interface Item {
  name: string
  nickName: string
}
function transform(obj: Record<string, any>, level = 0, prefixs: number[], result: Item[]) {
  if (obj === null || typeof obj !== "object") return

  const prefix = prefixs.join("_")

  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue

    const value = obj[key]["Attributes"]

    // 过滤掉 id 不存在或 id >= 8000
    if (!value || !value.id || value.id >= 8000) continue

    let nickName = ""
    if (prefix) nickName = prefix + "_"
    nickName += value.show

    result.push({ name: `flaw_type_${value.id}`, nickName })

    if (level === prefixs.length) prefixs.push(value.show)

    // 子对象嵌套
    if (key !== "Attributes") {
      transform(obj[key], level + 1, prefixs, result)
    }

    prefixs.pop()
  }
}

const config = {
  g_unKown: {
    Attributes: {
      alarmnum: 10,
      analysis: false,
      color: "#ff6600",
      id: 8000,
    },
  },
  主要缺陷: {
    Attributes: {
      color: "#aa0000",
      enable: true,
      algorithm_id: 1913,
      id: 1300,
      show: "大型缺陷",
    },
    Level_0: {
      Attributes: {
        color: "#bb0000",
        enable: true,
        algorithm_id: 1913,
        id: 1301,
        show: "可见",
      },
      aaa: {
        Attributes: {
          color: "#aa0010",
          enable: false,
          algorithm_id: 1413,
          id: 6666,
          show: "test666666",
        },
        bbb: {
          Attributes: {
            color: "#aa0010",
            enable: false,
            algorithm_id: 1413,
            id: 6999,
            show: "aaaaaaaa",
          },
        },
      },
    },
    Level_1: {
      Attributes: {
        color: "#aa0010",
        enable: true,
        algorithm_id: 1413,
        id: 1302,
        show: "不可见",
      },
      Level_0: {
        Attributes: {
          color: "#aa0010",
          enable: true,
          algorithm_id: 1413,
          id: 111,
          show: "哈哈哈",
        },
      },
    },
    min: {
      show: "最小像素数",
      unit: "个",
      value: 25,
    },
  },
  颜色缺陷: {
    Attributes: {
      color: "#aa0010",
      enable: true,
      algorithm_id: 913,
      id: 1200,
      show: "白点",
    },
    Level_0: {
      Attributes: {
        color: "#aa0010",
        enable: true,
        algorithm_id: 1413,
        id: 1201,
        show: "微小白点",
      },
    },
    Level_1: {
      Attributes: {
        color: "#aa0010",
        enable: true,
        algorithm_id: 1413,
        id: 1202,
        show: "小白点",
      },
    },
    Level_2: {
      Attributes: {
        color: "#aa0010",
        enable: true,
        algorithm_id: 1413,
        id: 1203,
        show: "中白点",
      },
    },
    Level_3: {
      Attributes: {
        color: "#aa0010",
        enable: true,
        algorithm_id: 63,
        id: 1204,
        show: "大白点",
      },
    },
    Level_4: {
      Attributes: {
        color: "#aa0010",
        enable: true,
        algorithm_id: 213,
        id: 1205,
        show: "超大白点",
      },
    },
  },
  纹路: {
    Attributes: {
      color: "#aa0010",
      enable: true,
      algorithm_id: 1413,
      id: 1700,
      show: "划痕/划伤",
    },
    Level_0: {
      Attributes: {
        color: "#aa0010",
        enable: true,
        algorithm_id: 23,
        id: 1701,
        show: "条纹",
      },
    },
    ashow: {
      max: 50,
      show: "横条纹灵敏度",
      unit: "等级",
      value: 10,
    },
    minLineHeight: {
      max: 50,
      show: "最小条纹长度",
      unit: "等级",
      value: 10,
    },
    verLineFliterGradient: {
      max: 50,
      show: "竖条纹灵敏度",
      unit: "等级",
      value: 0,
    },
  },
  webconfig: {
    Attributes: {
      host: "192.168.1.1",
      port: "8008",
    },
  },
}
const target = [
  { name: "flaw_type_1300", nickName: "大型缺陷" },
  { name: "flaw_type_1301", nickName: "大型缺陷_可见" },
  { name: "flaw_type_6666", nickName: "大型缺陷_可见_test666666" },
  { name: "flaw_type_6999", nickName: "大型缺陷_可见_test666666_aaaaaaaa" },
  { name: "flaw_type_1302", nickName: "大型缺陷_不可见" },
  { name: "flaw_type_111", nickName: "大型缺陷_不可见_哈哈哈" },
  { name: "flaw_type_1200", nickName: "白点" },
  { name: "flaw_type_1201", nickName: "白点_微小白点" },
  { name: "flaw_type_1202", nickName: "白点_小白点" },
  { name: "flaw_type_1203", nickName: "白点_中白点" },
  { name: "flaw_type_1204", nickName: "白点_大白点" },
  { name: "flaw_type_1205", nickName: "白点_超大白点" },
  { name: "flaw_type_1700", nickName: "划痕/划伤" },
  { name: "flaw_type_1701", nickName: "划痕/划伤_条纹" },
]

const result = [] as Item[]
transform(config, 0, [], result)
console.log(result)
