const data = [
    {
        _id: "1022",
        content: "hello world",
        completed: true,
    },
    {
        _id: "1023",
        content: "hello java",
        completed: false,
    },
    {
        _id: "1024",
        content: "hello js",
        completed: false,
    },
];

const student = {
    personalInfo: {
        _id: "1022",
        name: "jack",
        age: 20,
    },
    performInfo: {
        score: 98,
        grade: "A",
    }
};

const personal = {
    _id: "9527",
    name: "star",
    age: 23,
}

const queryStudentResolver = (obj, args, context, info, parent) => {
    // console.log("obj: ", obj);
    // console.log("args: ", args);
    // console.log("context: ", context);
    // // console.log("info: ", info);
    // console.log("parent: ", parent)
    return student;
};

const personalResolver = (parent, obj, args, context, info) => {
    console.log("==================");
    console.log("start resolver person");
    console.log("obj: ", obj);
    console.log("args: ", args);
    console.log("context: ", context);
    console.log("info: ", info);
    console.log("parent: ", parent)
    return personal;
}

const gradeResolver = (parent, args, context, info) => {
    console.log("============");
    console.log("parent: ", parent);
    console.log("args: ", args);
    return "S";
}

const resolvers = {
    Query: {
        todoList: () => data,
        queryStudentInfo: queryStudentResolver,
    },
    StudentInfo: {
        personalInfo: personalResolver,
    },
    PerformInfo: {
        grade: gradeResolver,
    }
}

module.exports = resolvers;